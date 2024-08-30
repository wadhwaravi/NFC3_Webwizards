# Ration Card Verification API

This API fetches Ration Card Details from the central Govt. Website using Web Scrapping Technique

## Table of Contents

- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Endpoints](#EndPoints)
- [Support](#Support)
- [Contribution](#Contribution)

## Features

- It Maintains session information for handling dynamic captcha url.
- Sends Ration Card Number along with captcha and session id to the given endpoint.
- Return Ration Card details in a structured JSON format.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubham-dube/Ration_Card-Verification-API.git
   cd Ration_Card-Verification-API
   
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   venv\Scripts\activate # On Linux use `source venv/bin/activate`
   
3. Install the dependencies:
   ```bash
   pip install flask requests uuid base64 bs4 html

4. Run the Application:
   ```bash
   python app.py
 *The API will be available at http://127.0.0.1:5000 .*
 
## Usage
- Show the captcha recieved, to the user and two input to enter captcha and Ration Card Number.
- Send the Ration Card number entered and captcha along with the session id recieved.
- You will get the Ration Card Details which is registered on the central govt. website.
  
## EndPoints

### Fetching Captcha

**Endpoint:** `/api/v1/getCaptcha`

**Method:** `GET`

**Description:** `This Endpoint fetches captcha from that webisite of that instance`

**Response**
```json
{
  "sessionId": "99999999",
  "image": 'data:image/png;base64, captchaBase64 '
}
```
**Status Codes**
- 200 OK : `Captcha Recieved`

### Get Ration Card Details

**Endpoint:** `/api/v1/getRationCardDet`

**Method:** `POST`

**Description:** `Submits the Ration Card Number and captcha along with the Session ID recieved to get the ration card details`

**Request Body:**
```json
{
  "sessionId": "OBTAINED ON FETCHING CAPTCHA",
  "rationCardNumber": "030001964085",
  "captcha": "your_captcha_here"
}
```
**Response**
```json
{
    "address": "LUDHIANA, PUNJAB",
    "headOfFamily": "BABITA",
    "isAllowedForONORC": "Yes(Can take ration from any shop)",
    "members": [
        {
            "memberID": "03000196408501",
            "memberName": "BABITA",
            "relationWithHOF": "SELF",
            "uidStatus": "Yes"
        },
        {
            "memberID": "03000196408502",
            "memberName": "AMIT",
            "relationWithHOF": "HUSBAND",
            "uidStatus": "Yes"
        },
        {
            "memberID": "03000196408504",
            "memberName": "LIZA",
            "relationWithHOF": "DAUGHTER",
            "uidStatus": "Yes"
        }
    ],
    "numberOfMembers": 3,
    "rationCardNumber": "030001964085",
    "scheme": "PHH"
}
```
**Status Codes**
- 200 OK : `Data Retrieved Successfuly`

## Support
For Support Contact me at itzshubhamofficial@gmail.com
or Mobile Number : `+917687877772`

## Contribution

We welcome contributions to improve this project. Here are some ways you can contribute:

1. **Report Bugs:** If you find any bugs, please report them by opening an issue on GitHub.
2. **Feature Requests:** If you have ideas for new features, feel free to suggest them by opening an issue.
3. **Code Contributions:** 
    - Fork the repository.
    - Create a new branch (`git checkout -b feature-branch`).
    - Make your changes.
    - Commit your changes (`git commit -m 'Add some feature'`).
    - Push to the branch (`git push origin feature-branch`).
    - Open a pull request.

4. **Documentation:** Improve the documentation to help others understand and use the project.
5. **Testing:** Write tests to improve code coverage and ensure stability.

Please make sure your contributions adhere to our coding guidelines and standards.
