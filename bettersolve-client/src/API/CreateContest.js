export default class SubmitContest {
  static async handleModalSubmit(contestData) {
    const contestDataInt = {
      ...contestData,
      duration: parseInt(contestData.duration, 10),
      start_time: new Date().toISOString()
    };

    const token = localStorage.getItem('ACCESS');

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
      const response = await fetch("http://localhost:5000/createContest", requestOptions);
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        throw new Error("Request failed with status " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
