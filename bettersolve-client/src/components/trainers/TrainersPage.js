import React from "react";
import CreatedContests from "./CreatedContests";
import { useNavigate } from "react-router-dom";
import "../contests/tasks/taskList/TaskList.css";

const TrainersPage = () => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/edu/create`; 
        navigate(path);
  }
    return(
        <div style={{width:"100%"}}>
            <div className = {"taskListForm"}>
                <h1 className="taskHeader"> Созданные соревнования: </h1>
                <CreatedContests contests = 'Название контеста'/>
                <CreatedContests contests = 'Лучший программист ИиТП'/>
                <CreatedContests contests = '8 яблок'/>
                <CreatedContests contests = 'Мы делили апельсин'/>
            <button className="darkButton" onClick={routeChange}>Создать контест</button>
            </div>
        </div>
    )
}

export default TrainersPage