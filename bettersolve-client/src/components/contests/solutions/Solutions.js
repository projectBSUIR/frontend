import React from "react";
import styles from '../TaskResultStyles.module.css';
const solutions = [
    {
        num: 1,
        date: new Date(),
        UserName: "Kot_Jmot",
        complexity: "А - Сложный вопрос",
        compiler: ".Net v6",
        solutionStatus: "Ошибка компиляции"

    },
    {
        num: 2,
        date: new Date(),
        UserName: "VanVey25",
        complexity: "А - Сложный вопрос",
        compiler: "C++20",
        solutionStatus: "Принято"

    },
]
const elements = [];

solutions.forEach((solution) => {
    elements.push(
    <tr>
        <td>{solution.num}</td>
        <td>{solution.date.toLocaleString() + ""}</td>
        <td>{solution.UserName}</td>
        <td>{solution.complexity}</td>
        <td>{solution.compiler}</td>
        <td>{solution.solutionStatus}</td>
    </tr>);
  });
const Submissions = () =>{
    return (
        <div  className={styles.MainPage}>
            <div className={styles.Content}>
                <span className={styles.Header}>
                    Мои решения:
                </span>
                <table className={styles.tableSettings}>
                    <tr>
                        <td>№ Решения</td>
                        <td>Дата</td>
                        <td>Имя пользователя</td>
                        <td>Задача</td>
                        <td>Компилятор</td>
                        <td>Вердикт</td>
                    </tr>
                    {elements}
                </table>
            </div>
        </div>
    )
}

export default Submissions