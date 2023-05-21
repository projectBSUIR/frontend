import React, { useEffect, useState } from 'react';

const GetTask = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000//contest/${id}') 
      .then((response) => response.json())
      .then((data) => {
        setProblems(data.problems);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div>
      {problems.map((problem) => (
        <div key={problem.id}>
          <h2>{problem.id}</h2>
          <pre>{JSON.stringify(problem.properties, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default GetTask;
