import React from "react"
import { useNavigate } from "react-router-dom"
import "./Date.css"
import "./FieldForm.css";
import name from "./ContestsName.module.css"

const ContestsComponent = (props) => {
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/contests/1/problem`; 
    navigate(path);
  }
    return(
        <div className="fieldForm" onClick={routeChange}>
                <h1 className={name.contestsName}> {props.contest} </h1>
                <p className="date"> {props.date} </p>
        </div>
    )
}

export default ContestsComponent