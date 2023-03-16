import React from 'react';
import "./App.css";
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import AuthRootComponent from "./components/auth";
function App() {
  return (
    <div className="app">
       <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/enter" element = {<AuthRootComponent/>}/>
            <Route path = "/register" element = {<AuthRootComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
