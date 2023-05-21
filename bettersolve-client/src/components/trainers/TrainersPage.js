import React, { useState } from "react";
import CreatedContests from "./CreatedContests";
import "../contests/tasks/taskList/TaskList.css";
import "./styles/ModalContest.css";
import SubmitContest from "../../API/CreateContest";

const TrainersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [contestData, setContestData] = useState({
    name: "",
    start_time: "",
    duration: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContestData({ ...contestData, [name]: value });
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  async function test(){
    await SubmitContest.handleModalSubmit(contestData)
  }

  return (
    <div style={{ width: "100%" }}>
      <div className={"taskListForm"}>
        <h1 className="taskHeader"> Созданные соревнования: </h1>
        <CreatedContests contests="Название контеста" />
        <CreatedContests contests={contestData.name} />
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
                    name="start_time"
                    value={contestData.start_time}
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
                <button type="button" onClick={test}>
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
