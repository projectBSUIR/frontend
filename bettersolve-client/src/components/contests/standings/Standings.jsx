import React from "react";
import styles from '../TaskResultStyles.module.css';
import tableStyles from './worldResult.module.css';
const people = [
    {
        num:1,
        userName: 'Kot_Jmot',
        score: 9913,
        penalty: 5,
        A: '+',
        B: '+3',
        C: '+',
        D: '+',
        E: '-'
    },
    {
        num:2,
        userName: 'Van_Vey',
        score: 8847,
        penalty: 5,
        A: '+',
        B: '-2',
        C: '+4',
        D: '+',
        E: '+'
    }
]
var elements = []
people.forEach((person)=>
{
    elements.push(
    <tr>
        <td>{person.num}</td>
        <td>{person.userName}</td>       
        <td>{person.score}</td>
        <td>{person.penalty}</td>
        <td>{person.A}</td>
        <td>{person.B}</td>
        <td>{person.C}</td>
        <td>{person.D}</td>
        <td>{person.E}</td>
    </tr>);
});
const Standings = () =>{
return (
    <div className={styles.MainPage}>
        <div className={styles.Content}>
            <div className={styles.Header}>
                <span>Результаты:</span>
                <input placeholder="Поиск" className={styles.SearchInput}/>
            </div>
            <table className={styles.tableSettings + " " + tableStyles.worldResTable}>
                <tr>
                    <td>№</td>
                    <td>Имя пользователя</td>
                    <td>Счет</td>
                    <td>Штраф</td>
                    <td>А</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                </tr>
                {elements}
            </table>
        </div>
    </div>
);
}

export default Standings;