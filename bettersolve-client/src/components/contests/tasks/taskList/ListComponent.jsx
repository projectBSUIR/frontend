import React from "react"
import "./TaskList.css"
import { useNavigate } from "react-router-dom"

const ListComponent = (props) => {
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/contests/1/problem/submissions`; 
    navigate(path);
  }
    return(
        <div>
            <div className="taskNameList">
                A. {props.task }
                <button className="mysollution" onClick={routeChange}> Мои решения </button>
            </div>
            <p className="line"/>
        </div>
    )
}

export default ListComponent