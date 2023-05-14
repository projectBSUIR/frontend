import axios from "axios";

export default class LoginService
{
    static async login(values){
        if(localStorage.getItem('ACCESS')){
            localStorage.removeItem('ACCESS')
        }
        await axios.post('http://localhost:5000/login', values)
        .then(response => {
            console.log(response)
            localStorage.setItem('ACCESS', response.data.access_token)
        })
    }
}