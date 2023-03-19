import React from 'react';
import "./App.css";
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import AuthRootComponent from "./components/auth";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='app'>
      <Header />
       <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/enter" element = {<AuthRootComponent/>}/>
            <Route path = "/register" element = {<AuthRootComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
