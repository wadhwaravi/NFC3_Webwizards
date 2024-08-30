from flask import Flask, jsonify, request
import requests
import uuid
import base64
from bs4 import BeautifulSoup
import html
from asgiref.wsgi import WsgiToAsgi
from flask_cors import CORS


app = Flask(__name__)
asgi_app = WsgiToAsgi(app)
CORS(app)


rationSessions = {}

@app.route("/api/v1/getCaptcha", methods=["GET"])
def getCaptcha():
    try:
        baseUrl = "https://nfsa.gov.in/public/"

        session = requests.Session()
        id = str(uuid.uuid4())

        response = session.get("https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx")

        htmlString = response.text
        cleaned_html_string = htmlString.replace('\n', '').replace('\r', '').replace('\t', '').replace('\\', '')
        cleaned_html_string = html.unescape(cleaned_html_string)

        soup = BeautifulSoup(cleaned_html_string, 'html.parser')
        imageUrl = baseUrl + soup.find_all('div', class_="form-group")[2].find('img').get('src')
        print(imageUrl)

        postData = {
            "_TSM_HiddenField_": soup.find('input', id="_TSM_HiddenField_").get('value'),
            "__EVENTTARGET": "",
            "__EVENTARGUMENT": "",
            "__VIEWSTATE": soup.find('input', id="__VIEWSTATE").get('value'),
            "__VIEWSTATEGENERATOR": soup.find('input', id="__VIEWSTATEGENERATOR").get('value'),
            "__VIEWSTATEENCRYPTED": soup.find('input', id="__VIEWSTATEENCRYPTED").get('value'),
            "__EVENTVALIDATION": soup.find('input', id="__EVENTVALIDATION").get('value'),
            "ctl00$ucLanguageList1$hdnState": "00",
            "ctl00$txtMainSearch": "",
            "ctl00$ContentPlaceHolder1$ddlSearchType": "R",
            "ctl00$ContentPlaceHolder1$hdnPortalLanguage": "1",
            "ctl00$ContentPlaceHolder1$hdnPortalState": "00",
            "ctl00$hdnMasterState": "00",
            "ctl00$hdnMasterLanguage": "en",
            "ctl00$hdnLoginTimeFromServer": soup.find('input', id="hdnLoginTimeFromServer").get('value'),
            "ctl00$hdnRandomNumberField": soup.find('input', id="hdnRandomNumberField").get('value'),
            "__ASYNCPOST": "false",
            "ctl00$ContentPlaceHolder1$btnGetRCDetails": "Get RC Details"
        }
        loginKeys = {
            "searchKey": "ctl00$ContentPlaceHolder1$txtSearchExpression",
            "captchaKey": "ctl00$ContentPlaceHolder1$txtCaptcha",
        }

        rationSessions[id] = {
            "session": session,
            "postData": postData,
            "loginKeys": loginKeys
        }
        response = session.get(imageUrl)
        captchaBase64 = base64.b64encode(response.content).decode("utf-8")

        jsonResponse = {
            "sessionId": id,
            "image": "data:image/png;base64," + captchaBase64,
        }
        print("session id" + id)
        print("image address" + captchaBase64)

        return jsonify(jsonResponse), 200

    except Exception as e:
        print(e)
        return jsonify({"error": "Error in fetching Captcha"}), 500
    
@app.route("/api/v1/getRationCardDet", methods=["POST"])
def getRationCardDet():
    try:
        sessionId = request.json.get("sessionId")
        rcNo = request.json.get("rationCardNumber")
        captcha = request.json.get("captcha")

        user = rationSessions.get(sessionId)
        if not user:
            return jsonify({"error": "Invalid sessionId"}), 400

        postData = user['postData']
        loginKeys = user['loginKeys']
        postData[loginKeys['searchKey']] = rcNo
        postData[loginKeys['captchaKey']] = captcha

        session = user['session']

        response = session.post(
            "https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx",
            data=postData
        )
        htmlString = response.text
        cleaned_html_string = htmlString.replace('\n', '').replace('\r', '').replace('\t', '').replace('\\', '')
        cleaned_html_string = html.unescape(cleaned_html_string)

        soup = BeautifulSoup(cleaned_html_string, 'html.parser')

        labelError = soup.find('span', id="ContentPlaceHolder1_lblErrorMsg").get_text()
        captchaError = soup.find('span', id="ContentPlaceHolder1_lblCaptcha").get_text()
        if labelError:
            return jsonify({"error": labelError}), 400
        if captchaError:
            return jsonify({"error": captchaError}), 400

        dataList = soup.find('dl')
        dds = dataList.find_all('dd')

        rationCardNo = dds[0].get_text()
        scheme = dds[1].get_text()
        ONORC = dds[2].get_text()
        HOF = dds[3].get_text()
        address = dds[4].get_text()

        memberTable = soup.find('table')
        memberRows = memberTable.find('tbody').find_all('tr')

        numberOfMembers = len(memberRows)
        members = []

        for row in memberRows:
            memberId = row.find_all('td')[1].get_text()
            name = row.find_all('td')[2].get_text()
            relationWithHOF = row.find_all('td')[3].get_text()
            uidStatus = row.find_all('td')[4].get_text()

            members.append({
                "memberID": memberId,
                "memberName": name,
                "relationWithHOF": relationWithHOF,
                "uidStatus": uidStatus
            })
        
        jsonResponse = {
            "rationCardNumber": rationCardNo,
            "scheme": scheme,
            "isAllowedForONORC": ONORC,
            "headOfFamily": HOF,
            "address": address,
            "numberOfMembers": numberOfMembers,
            "members": members
        }

        return jsonify(jsonResponse), 200

    except Exception as e:
        print(e)
        return jsonify({"error": "Error in fetching Ration Card Details. Please Retry Again"}), 500

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(asgi_app, host='0.0.0.0', port=5001)
