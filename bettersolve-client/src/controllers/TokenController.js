
export default class TokenController {
    static setToken(token) {
        console.log()
        localStorage.setItem('ACCESS', token);
    }
    static extractToken() {
        let token = this.getToken();
        if (token) {
            localStorage.removeItem("ACCESS");
        }
        return token;
    }
    static getToken() {
        return localStorage.getItem("ACCESS");
    }
  }
  