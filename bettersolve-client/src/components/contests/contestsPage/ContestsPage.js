import React, { useEffect, useState } from "react";
import ContestsComponent from "./ContestsProps";

const Contests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contests")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContests(data.contests);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="mainForm">
      {contests.map((contest) => (
        <ContestsComponent
          key={contest.id}
          contest={contest.name}
          date={contest.start_time}
        />
      ))}
    </div>
  );
};

export default Contests;
