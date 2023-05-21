import React from "react";
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const { contests } = location.state;
    const { problems } = location.state;
    const { id } = useParams();
    
    return (
      <div className='menu'>
        <div className="navigation + BackToTasks">
          <div className="arrow"></div>
          <NavLink to="/contests" className={navData => navData.isActive ? "active" : ''}>   К задачам </NavLink>
        </div>
        <p className="headline">{contests[id-1]?.name}</p>
        <p className="status">Статус контеста</p>
        <p className="line" />
        <div className="navigation">
          {problems.map((problem, index) => (
            <div key={index}>
              <NavLink
                to={`/contests/${id}/problem/${index + 1}`}
                className={navData => navData.isActive ? "active" : ''}
              >
                {String.fromCharCode(65 + index)}. {problem.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Menu;
