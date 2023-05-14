import React, { useState } from "react";
import CreatedContests from "./CreatedContests";
import "../contests/tasks/taskList/TaskList.css";
import "./styles/ModalContest.css";

const TrainersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [contestData, setContestData] = useState({
    name: "",
    startDate: "",
    duration: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContestData({ ...contestData, [name]: value });
  };

  const handleModalSubmit = () => {
    console.log(contestData);
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className={"taskListForm"}>
        <h1 className="taskHeader"> Созданные соревнования: </h1>
        <CreatedContests contests="Название контеста" />
        <CreatedContests contests="Лучший программист ИиТП" />
        <CreatedContests contests="8 яблок" />
        <CreatedContests contests="Мы делили апельсин" />
        <button className="darkButton" onClick={handleModalOpen}>
          Создать контест
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
              <h2 className="header">Создание контеста</h2>
              <form>
                <label>
                  Название:
                  <input className="field" 
                    type="text"
                    name="name"
                    value={contestData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Дата начала:
                  <input className="field" 
                    type="date"
                    name="startDate"
                    value={contestData.startDate}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Длительность:
                  <input className="field" 
                    type="time"
                    name="duration"
                    value={contestData.duration}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="button" onClick={handleModalSubmit}>
                  Создать
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainersPage;
