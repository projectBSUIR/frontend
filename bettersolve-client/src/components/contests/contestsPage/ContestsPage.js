import React, { useEffect, useState } from "react";
import ContestsComponent from "./ContestsProps";
import { useNavigate } from "react-router-dom";

const Contests = () => {
  const [contests, setContests] = useState([]);
  const navigate = useNavigate();

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

  const routeChange = (id) => {
    let path = `/contests/${id}/problem`;
    navigate(path);
  };

  return (
    <div className="mainForm">
      {contests.map((contest) => (
        <ContestsComponent
          key={contest.id}
          contest={contest.name}
          date={contest.start_time}
          onClick={() => routeChange(contest.id)}
        />
      ))}
    </div>
  );
};

export default Contests;
