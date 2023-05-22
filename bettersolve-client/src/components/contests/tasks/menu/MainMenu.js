import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const Menu = (props) => {
    const location = useLocation();
    const [contests, setContests] = useState()
    const [problems, setProblems] = useState()
    const { id, problemId } = useParams();

    function showProblemNames() {
      if (!problems) {
        return <></>
      }
      let list = []
      problems.map((problem, index) => (
        list.push(<div key={index}>
          <NavLink
            to={{
              pathname: `/contest/${id}/problem/${problem.id}`,
              userState: {problem_properties: problem.properties}}}
            className={navData => navData.isActive ? "active" : ''}
          >
            {String.fromCharCode(65 + index)}. {problem.properties.name}
          </NavLink>
        </div>)
      ))
      return list
    }

    function getPropertiesWithProblemId(problems, problemId) {
      for (let i = 0; i < problems.length; i++) {
        if (problems[i].id === parseInt(problemId, 10)) {
          return problems[i].properties
        }
      }
      return 11
    }

    useEffect(() => {
      let handleData = async () => {
        if (!contests) {
          await fetch('http://localhost:5000/contests')
          .then((response) => response.json())
          .then((data) => {
            setContests(data.contests);
          })
          .catch((error) => {
            console.error('Ошибка:', error);
          });
        }

        await fetch(`http://localhost:5000/contest/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (problemId !== undefined) {
            props?.setProblemProperties(getPropertiesWithProblemId(data.problems, problemId))
          }
          setProblems(data.problems);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
      }
      handleData();
    }, [location])
    
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
