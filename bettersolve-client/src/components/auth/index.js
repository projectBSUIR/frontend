import React from 'react';
import {useLocation} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./Style.css";
import {Box} from "@mui/material";

const AuthRootComponent = () => {
    const location = useLocation()
    return (
            <div className="form">
                <Box
                    style = {{
                        marginTop: '13%',
                        padding: '67px',
                        background: "#F2F1F8",
                        borderRadius: '15px',
                        boxShadow: '5px 5px 10px #ccc',

                    }}>
                    {location.pathname === '/enter' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null}
                </Box>
            </div>
    )
    };

export default AuthRootComponent;