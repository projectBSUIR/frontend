import React from "react";
import "../Grid.css";
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    return(
    <div className='menu'>
            <div className="navigation + BackToTasks">
                <div class="arrow"></div>
                <NavLink to = "/contests" className = { navData => navData.isActive ? "active" : ''}>   К задачам </NavLink>
            </div>
            <p className="headline">Название контеста</p>
            <p className="status">Статус контеста</p>
            <p className="line"/>
            <div className="navigation">
                <div>
                <NavLink to = "/contests/1/problem/1" className = { navData => navData.isActive ? "active" : ''}>  А. Название задачи  </NavLink>
                </div>
                <br/>
                <div>
                <NavLink to = "/contests/1/problem/2" className = { navData => navData.isActive ? "active" : ''}>  B. Название задачи </NavLink>
                </div>
                <br/>
                <div>
                <NavLink to = "/contests/1/problem/3" className = { navData => navData.isActive ? "active" : ''}>  C. Название задачи </NavLink>
                </div>
                <br/>
            </div>
    </div>
    )
}
export default Menu