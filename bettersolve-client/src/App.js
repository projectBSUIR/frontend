import React from 'react';
import "./App.css";
import Home from "./components/home/HomePage";
import {Route, Routes} from "react-router-dom";
import AuthRootComponent from "./components/authorization/Routes";
import Header from "./components/header/Header";
import Contests from "./components/contests/contestsPage/ContestsPage";
import Task from "./components/contests/tasks/taskPage/TaskPage";
import TaskList from './components/contests/tasks/taskList/TaskList';
import Submissions from './components/contests/solutions/Solutions';
import Standings from './components/contests/standings/Standings'

function App() {
  return (
    <div className='app'>
      <Header />
       <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/contests" element = {<Contests/>}/>
            <Route path = "/contests/1/problem" element = {<TaskList/>}/>
            <Route path = "/contests/1/problem/1" element = {<Task/>}/>
            <Route path ="/contests/1/problem/standings" element={<Standings/>}/>
            <Route path = "/contests/1/problem/submissions" element = {<Submissions/>}/>
            <Route path = "/enter" element = {<AuthRootComponent/>}/>
            <Route path = "/register" element = {<AuthRootComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
