import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './education.css';


const Educate = () => {
    return (
        <div>
            <p><FontAwesomeIcon icon="fa-solid fa-user-graduate" className="graduate" size="2x" />Bachelors in Physics</p>
            <p><FontAwesomeIcon icon="fa-solid fa-school" className="school" size="2x" />Delta State University - Nigeria</p>
            <p><FontAwesomeIcon icon="fa-regular fa-calendar-days" className="edu-date" size="2x" />January 2006 to December 2009</p>
        </div>
    )
}

export default Educate