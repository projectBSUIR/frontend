import React, { useState } from "react";
import Menu from "../menu/MainMenu";
import "../Grid.css";
import CodeInput from "./CodeTextArea";
import MathJax from "react-mathjax2";

const Task = () => {
  const [properties, setProperties] = useState();

  function setProblemProperties(problem_properties) {
    setProperties(problem_properties);
  }

  function showNotes() {
    if (!properties?.notes) {
      return <></>;
    }
    return (
      <>
        <p className="headline">Примечания</p>
        <MathJax.Context>
          <div>{properties.notes}</div>
        </MathJax.Context>
        <p className="line" />
      </>
    );
  }

  return (
    <div className="app-wrapper">
      <script
        language="javascript"
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js"
      ></script>
      <script
        language="javascript"
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/perl/perl.min.js"
      ></script>
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/js/codemirror-5.62.0/lib/codemirror.css"
      ></link>
      <Menu setProblemProperties={setProblemProperties} />
      <div className="content">
        <h1 className="contestsName">{properties?.name}</h1>
        <p className="limits">
          Лимит времени: {properties?.timeLimit} мс <br />
          Лимит памяти: {properties?.memoryLimit / 1024 / 1024} МБ
        </p>
        <p className="line" />
        <MathJax.Context>
          <div>{properties?.legend}</div>
        </MathJax.Context>
        <p className="headline">Входные данные</p>
        <MathJax.Context>
          <div>{properties?.input}</div>
        </MathJax.Context>
        <p className="line" />
        <p className="headline">Выходные данные</p>
        <MathJax.Context>
          <div>{properties?.output}</div>
        </MathJax.Context>
        <p className="line" />
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
                        <td>{sample.input}</td>
                        <td>{sample.output}</td>
                        </tr>
                    ))}
                    
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