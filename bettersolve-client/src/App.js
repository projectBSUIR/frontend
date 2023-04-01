import React from 'react';
import "./App.css";
import Home from "./components/home/HomePage";
import {Route, Routes} from "react-router-dom";
import AuthRootComponent from "./components/authorization/Routes";
import Header from "./components/header/Header";
import Contests from "./components/contests/Contests";

function App() {
  return (
    <div className='app'>
      <Header />
       <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/contests" element = {<Contests/>}/>
            <Route path = "/enter" element = {<AuthRootComponent/>}/>
            <Route path = "/register" element = {<AuthRootComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
