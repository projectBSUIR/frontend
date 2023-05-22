import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const [contests, setContests] = useState()
    const [problems, setProblems] = useState()
    console.log(location)
    const { id } = useParams();

    function showProblemNames() {
      if (!problems) {
        return <></>
      }
      let list = []
      console.log(problems)
      problems.map((problem, index) => (
        list.push(<div key={index}>
          <NavLink
            to={`/contest/${id}/problem/${index + 1}`}
            className={navData => navData.isActive ? "active" : ''}
          >
            {String.fromCharCode(65 + index)}. {problem.properties.name}
          </NavLink>
        </div>)
      ))
      return list
    }

    useEffect(() => {
      if (!contests) {
          fetch('http://localhost:5000/contests')
        .then((response) => response.json())
        .then((data) => {
          setContests(data.contests);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
      }

      fetch(`http://localhost:5000/contest/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProblems(data.problems);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
    }, [id])
    
    return (
      <div className='menu'>
        <div className="navigation + BackToTasks">
          <div className="arrow"></div>
          <NavLink to="/contests" className={navData => navData.isActive ? "active" : ''}>   К соревнованиям </NavLink>
        </div>
        <p className="headline">{contests && contests[id-1]?.name}</p>
        <p className="status">Статус контеста</p>
        <p className="line" />
        <div className="navigation">
          {showProblemNames()}
        </div>
      </div>
    );
}

export default Menu;
