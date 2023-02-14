import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './experienceCard.css';

const ExperienceCard = () => {
    return (
        <div>
            <div className="x-card">
                {/* <div>
                    <img className="firm-logo" alt=""></img>
                </div> */}
                <div>
                    <p><FontAwesomeIcon icon="fa-solid fa-industry" className="industry" size="2x" />Bincom ICT Solution</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon="fa-solid fa-location-dot" className="location" size="2x" />Lagos, Nigeria</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon="fa-regular fa-calendar-days" className="date-yr" size="2x" />June, 2021 - September, 2022</p>
                </div>

                <div>
                    <p><FontAwesomeIcon icon="fa-solid fa-person-digging" className="tasks" size="2x" /><b>Tasks:</b></p>
                </div>
                <div className="tasks-detail">
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Worked on responsive web and mobile applications</p> 
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Debugged SASS file to implement style changes to a LMS application.</p> 
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Read, write reusable code and debug Javascript snippets.</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Implement automatic logout logic for a production application.</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Developed application features that meets business needs </p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Translated users’ story to features and finally code </p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Designed official flyers with accurate typography and color shades</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Designed wireframes using Figma and converted designs to codes. </p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Did technical documentation with screenshots of finished functionality. </p>
                    <p><FontAwesomeIcon icon="fa-solid fa-up-down-left-right" className="bullet" color="#A9EBF5" />Worked with Jira and Slack for work delivery Good understanding running test with npm:</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard