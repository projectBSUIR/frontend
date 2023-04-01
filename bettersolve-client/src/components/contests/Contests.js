import React from "react";
import "./MainForm.css";
import "./FieldForm.css";
import name from "./ContestsName.module.css"
import { NavLink } from 'react-router-dom';
import "./Date.css"

const Contests = () =>{
    return (
        <div className = "mainForm">
             <NavLink to = "/contests/1" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>  
             <NavLink to = "/contests/2" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             <NavLink to = "/contests/3" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             <NavLink to = "/contests/4" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             <NavLink to = "/contests/5" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             <NavLink to = "/contests/6" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             <NavLink to = "/contests/7" className="fieldForm">
                <h1 className={name.contestsName}> Название контеста</h1>
                <p className="date">Дата начала</p>
             </NavLink>
             
        </div>
    )
}

export default Contests;