import TokenController from "../controllers/TokenController";
import { MakeAuthorizedRequest } from "./RequestService";

export default class ContestService 
{
  static async handleOwnContest() {
    const token = TokenController.getToken();

    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      credentials: 'include'
    };

    try {
      let response = await MakeAuthorizedRequest("ownContests", requestOptions, false);
      if (response.status === 200) {
        let data = response.data;
        return data.contests;
      } else {
        window.location.href = "http://localhost:3000/enter";
        throw new Error("Request failed with status " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    return null;
  }
}
