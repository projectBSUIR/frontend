import React, { useEffect, useState } from 'react';
import styles from '../TaskResultStyles.module.css';
import tableStyles from './Standings.module.css';
import { useParams } from "react-router-dom";
import { MakeRequest } from '../../../API/RequestService';

const Standings = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function handleData() {
      let response = await MakeRequest(`http://localhost:5000/contest/${id}/standings`, {})
      setData(response.data.problems)
    }
    handleData();
  }, [id]);

  const getCounterLabel = (index) => {
    const counter = String.fromCharCode(65 + index); // Начинается с буквы A
    return counter;
  };

  return (
    <div className={styles.MainPage}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <span>Результаты:</span>
          <input placeholder="Поиск" className={styles.SearchInput} />
        </div>
        <table className={`${styles.tableSettings} ${tableStyles.worldResTable} ${tableStyles.tasks}`}>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя пользователя</th>
              <th>Счет</th>
              <th>Штраф</th>
              {data && data.length > 0 && Object.keys(data[0].ProblemResult).map((key, index) => (
                <th key={key} className={styles.Letter}>
                  {getCounterLabel(index)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr key={item.id}>
                  <td>{rowIndex + 1}</td>
                  <td>{item.login}</td>
                  <td>{item.ContestResult}</td>
                  <td>{item.penalty}</td>
                  {Object.values(item.ProblemResult).map((result, index) => (
                    <td key={index} className={`${styles.Letter} ${tableStyles.td}`}>
                      {result}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Нет доступных задач.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
