import React from 'react';
import {TextField, Button} from "@mui/material";
import style from './style.module.css'

const LoginPage = () => {
    return (
        <div>
            <TextField border-radius = '10px' border = '1px solid #9F9CA0' label="User name" variant="outlined" placeholder = "Введите имя пользователя" />
            <TextField label="Password" variant="outlined" placeholder = "Введите ваш пароль" />
            <Button
                style={{
                    width: '300px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: "#6B31B5",
                    padding: "18px 36px",
                    fontSize: "18px"
                }}
                variant="contained"
            >
                Войти
            </Button>
        </div>
    )
}

export default LoginPage