
export async function fetchCatcha(){
    const response = await fetch('http://127.0.0.1:5001/api/v1/getCaptcha');
    console.log("inside the fet cahpcha")
    if(!response.ok){
        const err = new Error('Something went wrong during generation of new session id!!');
        throw err;
    }
    return response.json();
}
export async function fetchCardDetaile(body){
    const response = await fetch('http://127.0.0.1:5001/api/v1/getRationCardDet',{
        method : "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : 'application/json'
        }
    });
    if(!response.ok){
        const err = new Error('Something went wrong credencials or capcha ');
        throw err;
    }
    return response.json();
}
