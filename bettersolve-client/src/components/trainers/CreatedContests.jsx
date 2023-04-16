import React from "react";
import "../contests/tasks/taskList/TaskList.css";
import { useNavigate } from "react-router-dom";
import "./styles/Button.css";

const CreatedContests = (props) => {
  let navigate = useNavigate(); 

  const addTask = () =>{ 
    let path = `/edu/add`; 
    navigate(path);
  }

  const routeChange = () =>{ 
    let path = `/contests/1/problem/standings`; 
    navigate(path);
  }
    return(
        <div>
            <div className="taskNameList">
                <span className="contestHeader">{props.contests}</span>
                <button className="mysollution" onClick={addTask}> Добавить задачу </button>
                <button className="lightButton" onClick={routeChange}> Таблица результатов </button>
            </div>
            <p className="line"/>
        </div>
    )
}

export default CreatedContests