import React from "react";
import CreatedContests from "./CreatedContests";
import "../contests/tasks/taskList/TaskList.css";

const TrainersPage = () => {
    return(
        <div className = "taskListForm">
            <h1 className="taskHeader"> Созданные соревнования: </h1>
            <CreatedContests contests = 'Название контеста'/>
            <CreatedContests contests = 'Лучший программист ИиТП'/>
            <CreatedContests contests = '8 яблок'/>
            <CreatedContests contests = 'Мы делили апельсин'/>
        </div>
    )
}

export default TrainersPage