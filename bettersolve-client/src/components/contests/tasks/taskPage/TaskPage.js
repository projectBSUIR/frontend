import React from "react";
import Menu from "../menu/MainMenu";
import "../Grid.css";
import CodeInput from "./CodeTextArea"
import 'katex/dist/katex.min.css';
import { NavLink } from "react-router-dom";



const Task = () => {
    return(
        <div className = "app-wrapper">
            <script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js"></script>
            <script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/perl/perl.min.js"></script> 
            <link rel="stylesheet" type="text/css" href="/static/js/codemirror-5.62.0/lib/codemirror.css"></link>
            <Menu message = "hi" >
            linke = <NavLink to = "/contests/1/problem" className = { navData => navData.isActive ? "active" : ''}>   К задачам </NavLink>
            </Menu>
            <div  className="content"> 
            
            <h1 className="contestsName">Название</h1>
            <p className="limits"> Лимит времени: 1000 мс <br/> 
                Лимит памяти: 256 мб
            </p>
            <p className="line"/>
            <p className="headline">Входные данные</p>
            <p>В первой строке входных данных записано число</p>
            
            <p className="line"/>
            <p className="headline">Выходные данные</p>
            <p>В единственной строке выведите число m - номер следующего парня Маши, или ’: (’ - если его не будет(выводить без кавычек)</p>

            <p className="line"/>
            <p className="headline">Примечания</p>
            <p>...</p>
            
            <p className="line"/>
            <p className="headline">Пример</p>
            <table>
                <thead>
                    <tr>
                        <th>STDIN </th>
                        <th>STDOUT </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>4</td>
                    <td>:(</td>
                    </tr>
                    <tr>
                    <td>15</td>
                    <td>51</td>
                    </tr>
                </tbody>
            </table>
        
        <CodeInput/>
        <form method="post" enctype="multipart/form-data">
            <label class="input-file">
                <input type="file" name="file"/>		
                <span>Выберите файл</span>
            </label>
            <label className="compiler">Компилятор: </label>
            <select>
            <option value="Python">Python</option>
            <option value="C++17">C++17</option>
            <option selected value="C#">C#</option>
            <option value="Java">Java</option>
            </select>
            </form>
            <button className="sendButton"  type='submit' variant="contained">
                        <p className="buttonText">Отправить </p>
                    </button>
            </div>
        </div>
    )
    
}


export default Task;