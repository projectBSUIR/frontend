import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Menu from "../menu/MainMenu";
import "./TaskList.css";
import ListComponent from "./ListComponent";
import { useNavigate, useParams } from "react-router-dom";

const TaskList = () => {
  let navigate = useNavigate(); 

  const routeChange = () => { 
    let path = `/contests/1/problem/standings`; 
    navigate(path);
  }

  const [problems, setProblems] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/contest/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProblems(data.problems);
        console.log(setProblems);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, [id]);


  return (
    <div className="app-wrapper">
      <Menu>
        <div className="navigation + BackToTasks">
          <NavLink to="/contests" className={ navData => navData.isActive ? "active" : ''}>   К соревнованиям </NavLink>
        </div>
      </Menu>
      <div className="info">
        <div className="taskListForm">
          <p className="taskHeader">Задачи:</p>
          {problems && problems.length > 0 ? (
            problems.map((problem, index) => (
                <ListComponent key={problem.id} task={problem.properties} counter={String.fromCharCode(65 + index)} />
            ))
            ) : (
            <p>Нет доступных задач.</p>
            )}
        </div>
        <button className="standingButton" onClick={routeChange}>Таблица результатов</button>
      </div>
    </div>
  )
}

export default TaskList;
