import React, { useState } from "react";
import Menu from "../menu/MainMenu";
import "../Grid.css";
import CodeInput from "./CodeTextArea"
import 'katex/dist/katex.min.css';
import Latex from "../../../../controllers/Latex";

const Task = () => {
  const [properties, setProperties] = useState();

  function setProblemProperties(problem_properties) {
    setProperties(problem_properties);
  }

    function NewlineText(props) {
        const text = props.text;
        const newText = text?.split('\n').map(str => <p>{str}</p>);
        
        return newText;
      }
      

    function showNotes() {
        if (!properties?.notes) {
            return <></>
        }
        return <>
                <p className="headline">Примечания</p>
                <Latex><NewlineText text = {properties.notes}/> </Latex>
                <p className="line"/>
            </>
    }

    return(
        <div className = "app-wrapper">
            <Menu setProblemProperties = {setProblemProperties}/>
            <div  className="content"> 
            
            <h1 className="contestsName">{properties?.name}</h1>
            <p className="limits"> 
                <Latex>Лимит времени: {properties?.timeLimit} мс </Latex><br/> 
                <Latex>Лимит памяти: {properties?.memoryLimit / 1024 / 1024} МБ </Latex>
            </p>
            <p className="line"/>
            <Latex> <NewlineText text = {properties?.legend}/></Latex>
            <p className="headline">Входные данные</p>
            <Latex><NewlineText text = {properties?.input}/></Latex>
            
            <p className="line"/>
            <p className="headline">Выходные данные</p>
            <Latex><NewlineText text = {properties?.output}/></Latex>

            <p className="line"/>
            {showNotes()}
            
            <p className="headline">Пример</p>
            <table>
                <thead>
                    <tr>
                        <th>STDIN </th>
                        <th>STDOUT </th>
                    </tr>
                </thead>
                <tbody>
                    {properties?.sampleTests.map((sample, id) => (
                        <tr>
                        <td><Latex><NewlineText text = {sample.input}/></Latex></td>
                        <td><Latex><NewlineText text = {sample.output}/></Latex></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        
        <form method="post" enctype="multipart/form-data">
            <div style={{display:"flex", justifyContent:"left"}}>
                <input type="file" class="input-file" name="file" placeholder="Выберите файл" onchange="displayFileName(event)"/>
                <div style={{marginLeft:"15px;"}}>
                    <label className="compiler">Компилятор: </label>
                    <select>
                        <option value="Python">Python</option>
                        <option value="C++17">C++17</option>
                        <option selected value="C#">C#</option>
                        <option value="Java">Java</option>
                    </select>
                </div>
            </div>
            </form>
            <button className="sendButton"  type='submit' variant="contained">
                        <p className="buttonText">Отправить </p>
                    </button>
            </div>
        </div>
    )
    
}


export default Task;