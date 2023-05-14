import React from "react";
import styles from '../TaskResultStyles.module.css';
import tableStyles from './Standings.module.css';
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
        E: '-',
        F: '+3',
        G: '+',
        H: '+',
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
        E: '+',
        F: '+3',
        G: '+',
        H: '+',
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
        <td className={styles.Letter}>{person.A}</td>
        <td className={styles.Letter}>{person.B}</td>
        <td className={styles.Letter}>{person.C}</td>
        <td className={styles.Letter}>{person.D}</td>
        <td className={styles.Letter}>{person.E}</td>
        <td className={styles.Letter}>{person.F}</td>
        <td className={styles.Letter}>{person.G}</td>
        <td className={styles.Letter}>{person.H}</td>
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
            <table className={styles.tableSettings + " " + tableStyles.worldResTable + "" + tableStyles.tasks}>
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
                    <td>F</td>
                    <td>G</td>
                    <td>H</td>
                </tr>
                {elements}
            </table>
        </div>
    </div>
);
}

export default Standings;