import React,  { useState } from 'react'
import title from './registerTitleTextStyle.module.css';
import '../jeneralStyles/FieldStyle.css';
import '../jeneralStyles/ErrorTextStyle.css';
import '../jeneralStyles/ButtonStyle.css';
import '../jeneralStyles/LabelStyle.css';
import '../jeneralStyles/AlignTextStyle.css';
import { NavLink } from 'react-router-dom';
import style from  './TextStyle.module.css';

const RegisterPage = () => {
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [nicknameDirty, setNicknameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)
    const [nicknameError, setNicknameError] = useState('Данное поле должно быть заполнено')
    const [emailError, setEmailError] = useState('Данное поле должно быть заполнено')
    const [passwordError, setPasswordError] = useState('Данное поле должно быть заполнено')
    const [repeatPasswordError, setRepeatPasswordError] = useState('Данное поле должно быть заполнено')

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

const repeatPasswordHandler = (e) => {
    setRepeatPassword(e.target.value)
    if(!e.target.value){
        setRepeatPasswordError('Данное поле должно быть заполнено')
    }
    else {
        setRepeatPasswordError('')
    }
}

const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase())){
        setEmailError('Некорректный e-mail')
    }
    else {
        setEmailError('')
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
            case 'email':
                setEmailDirty(true)
                break
            case 'repeatPassword':
                    setRepeatPasswordDirty(true)
                    break
        }
    }

    return (
        <div>
            <form>
                <h1 className={title.registerTitle}>  
                    Регестрируйся
                </h1>
                <p className={style.paragraph}>И участвуй в различных контестах</p>

                <input className="field" onChange = {e => nicknameHandler(e)} value = {nickname} onBlur ={e => blurHandler(e)} type  = 'text' name = 'nickname' id='nickname'  placeholder='Введите имя пользователя' pattern='[a-zA-Z]+' minLength='4' required/>
                {(nicknameDirty && nicknameError) && <div className="errortext"> {nicknameError} </div>} 

                <input className="field" onChange = {e => emailHandler(e)} value = {email} onBlur ={e => blurHandler(e)} type  = 'text' name = 'email' id='email'  placeholder='Введите ваш e-mail адрес' minLength='4' required/>
                {(emailDirty && emailError) && <div className="errortext"> {emailError} </div>} 
                
                <input className="field" onChange = {e => passwordHandler(e)} value = {password} onBlur ={e => blurHandler(e)} name = 'password' id='password' type = 'password' placeholder='Введите пароль' minLength='6' required/>
                {(passwordDirty && passwordError) && <div className="errortext"> {passwordError} </div>}
            
                <input className="field" onChange = {e => repeatPasswordHandler(e)} value = {repeatPassword} onBlur ={e => blurHandler(e)} name = 'repeatPassword' id='repeatPassword' type = 'password' placeholder='Повторите пароль' minLength='6' required/>
                {(repeatPasswordDirty && repeatPasswordError) && <div className="errortext"> {repeatPasswordError} </div>}

                <button className="margins" type='submit' variant="contained">
               <p className="button">Зарегестрироваться </p>
            </button>

            <label className="label"> Уже есть аккаунт?⠀<NavLink to = "/enter" className="text">
                 Войти</NavLink>  </label>

            </form>
        </div>
    )
}

export default RegisterPage