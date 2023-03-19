import React from 'react';
import {useLocation} from "react-router-dom";
import LoginPage from "./login/login";
import RegisterPage from "./register/registration";
import "./Style.css";
import {Box} from "@mui/material";

const AuthRootComponent = () => {
    const location = useLocation()
    return (
            <div className="form">
                    {location.pathname === '/enter' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage style /> : null}
            </div>
    )
    };

export default AuthRootComponent;