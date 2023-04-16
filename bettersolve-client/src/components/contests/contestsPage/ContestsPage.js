import React from "react";
import ContestsComponent from "./ContestsProps";

const Contests = () =>{
    return (
        <div className = "mainForm">
             <ContestsComponent contest = 'Название контеста' date ='Дата начала'/>
             <ContestsComponent contest = 'Название контеста' date ='Дата начала'/>
             <ContestsComponent contest = 'Название контеста' date ='Дата начала'/>
             <ContestsComponent contest = 'Название контеста' date ='Дата начала'/>
             <ContestsComponent contest = 'Название контеста' date ='Дата начала'/>
        </div>
    )
}

export default Contests;