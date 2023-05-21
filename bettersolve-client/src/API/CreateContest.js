import TokenController from "../controllers/TokenController";
import { MakeAuthorizedRequest } from "./RequestService";

export default class SubmitContest {
  static async handleModalSubmit(contestData) {
    const contestDataInt = {
      ...contestData,
      duration: parseInt(contestData.duration, 10),
      start_time: new Date().toISOString()
    };

    const token = TokenController.getToken();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(contestDataInt),
      credentials: 'include'
    };

    try {
      const response = await MakeAuthorizedRequest("http://localhost:5000/createContest", requestOptions, false);
      if (response.status === 200) {
        const data = response.data;
        console.log("Success:", data);
      } else {
        throw new Error("Request failed with status " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
