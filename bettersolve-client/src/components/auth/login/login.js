import React, { useState } from 'react';
import  title from './loginTitleTextStyle.module.css';
import '../jeneralStyles/FieldStyle.css';
import '../jeneralStyles/ErrorTextStyle.css';
import '../jeneralStyles/ButtonStyle.css';
import '../jeneralStyles/LabelStyle.css';
import '../jeneralStyles/AlignTextStyle.css';
import { NavLink } from 'react-router-dom';


const LoginPage = () => {
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [nicknameDirty, setNicknameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nicknameError, setNicknameError] = useState('Данное поле должно быть заполнено')
    const [passwordError, setPasswordError] = useState('Данное поле должно быть заполнено')

const nicknameHandler = (e) => {
    setNickname(e.target.value)
    if(!e.target.value){
        setNicknameError('Данное поле должно быть заполнено')
    }
    else {
        setNicknameError('')
    }
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(!e.target.value){
        setPasswordError('Данное поле должно быть заполнено')
    }
    else {
        setPasswordError('')
    }
}

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'nickname':
                setNicknameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div> 
            <form>
                <h1 className={title.loginTitle}>
                    Вход
                </h1>

                <input className="field" onChange = {e => nicknameHandler(e)} value = {nickname} onBlur ={e => blurHandler(e)} type  = 'text' name = 'nickname' id='nickname'  placeholder='Введите имя пользователя' pattern='[a-zA-Z]+' minLength='4' required/>
                {(nicknameDirty && nicknameError) && <div className="errortext"> {nicknameError} </div>} 
                
                <input className="field" onChange = {e => passwordHandler(e)} value = {password} onBlur ={e => blurHandler(e)} name = 'password' id='password' type = 'password' placeholder='Введите пароль' minLength='6' required/>
                {(passwordDirty && passwordError) && <div className="errortext"> {passwordError} </div>}
            
            <button className="margins" type='submit' variant="contained">
               <p className="button">Войти </p>
            </button>

            <label className="label"> Еще нет аккаунта?⠀<NavLink to = "/register" className="text">
                 Зарегестрироваться</NavLink>  </label>
            </form>
        </div>
    )
}

export default LoginPage