import axios from "axios";

export default class RegisterService
{
    static async register(values){
        if(localStorage.getItem('ACCESS')){
            localStorage.removeItem('ACCESS')
        }
        let code = await getSHA256Hash(values.password)
        values.password = code;
        await axios.post('http://localhost:5000/register', values, { withCredentials: true })
        .then(response => {
            console.log(response)
            return response.data
        }).then(data =>{
            localStorage.setItem('ACCESS', data.access_token)
        })
    }
}
const getSHA256Hash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };