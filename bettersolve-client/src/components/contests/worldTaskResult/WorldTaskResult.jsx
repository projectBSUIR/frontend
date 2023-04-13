import React from "react";
import styles from '../TaskResultStyles.module.css';
import tableStyles from './worldResult.module.css';
const people = [
    {
        num:1,
        userName: 'Kot_Jmot',
        sumResult: 9913,
        tries: 5,
        timeCompiler: 23.1,
        size: 28.3
    },
    {
        num:2,
        userName: 'Van_Vey',
        sumResult: 8847,
        tries: 5,
        timeCompiler: 27.1,
        size: 34.3
    }
]
var elements = []
people.forEach((person)=>
{
    elements.push(
    <tr>
        <td>{person.num}</td>
        <td>{person.userName}</td>       
        <td>{person.sumResult}</td>
        <td>{person.tries}</td>
        <td>{person.timeCompiler}сек.</td>
        <td>{person.size}мб.</td>
    </tr>);
});
const TaskResult = () =>{
return (
    <div className={styles.MainPage}>
        <div className={styles.Content}>
            <div className={styles.Header}>
                <span>Мировые результаты:</span>
                <input placeholder="Посик" className={styles.SearchInput}/>
            </div>
            <table className={styles.tableSettings + " " + tableStyles.worldResTable}>
                <tr>
                    <td>№ в мире</td>
                    <td>Имя пользователя</td>
                    <td>Суммарный балл</td>
                    <td>Общее кол-во попыток</td>
                    <td>Общее время компиляции</td>
                    <td>Общий размер</td>
                </tr>
                {elements}
            </table>
        </div>
    </div>
);
}

export default TaskResult;