import { NavLink } from "react-router-dom";
import React from "react";
import Menu from "../menu/MainMenu";
import "./TaskList.css";
import ListComponent from "./ListComponent";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/contests/1/problem/Results`; 
        navigate(path);
  }
    return(
        <div className = "app-wrapper">
                <Menu>
                    <div className="navigation + BackToTasks">
                        <NavLink to = "/contests" className = { navData => navData.isActive ? "active" : ''}>   К соревнованиям </NavLink>
                    </div>
                </Menu>
                <div  className="info">
                    <div className="taskListForm">
                        <p className="taskHeader">Задачи:</p>
                        <ListComponent task = 'Название задачи'/>
                        <ListComponent task = 'Название задачи'/>
                        <ListComponent task = 'Название задачи'/>
                    </div>
                    <button className="standingButton" onClick={routeChange}>Таблица результатов</button>
                </div>
        </div>
    )
}
export default TaskList
