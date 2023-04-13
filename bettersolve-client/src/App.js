import React from 'react';
import "./App.css";
import Home from "./components/home/HomePage";
import {Route, Routes} from "react-router-dom";
import AuthRootComponent from "./components/authorization/Routes";
import Header from "./components/header/Header";
import Contests from "./components/contests/contestsPage/Contests";
import Task from "./components/contests/tasks/taskPage/TaskPage";
import TaskList from './components/contests/tasks/taskList/TaskList';
import Standing from './components/contests/standing/Standing';
import TaskResult from './components/contests/worldTaskResult/WorldTaskResult'

function App() {
  return (
    <div className='app'>
      <Header />
       <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/contests" element = {<Contests/>}/>
            <Route path = "/contests/1/problem" element = {<TaskList/>}/>
            <Route path = "/contests/1/problem/1" element = {<Task/>}/>
            <Route path ="/contests/1/problem/Results" element={<TaskResult/>}/>
            <Route path = "/contests/1/problem/solution/1" element = {<Standing/>}/>
            <Route path = "/enter" element = {<AuthRootComponent/>}/>
            <Route path = "/register" element = {<AuthRootComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
