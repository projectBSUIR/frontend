import axios from "axios";

export default class RegisterService
{
    static async register(values){
        if(localStorage.getItem('ACCESS')){
            localStorage.removeItem('ACCESS')
        }
        await axios.post('http://localhost:5000/register', values)
        .then(response => {
            console.log(response)
            localStorage.setItem('ACCESS', response.data.access_token)
        })
    }
}