import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceCard = () => {
    return (
        <div>
            <div className="x-card">
                <div>
                    <img className="firm-logo" alt=""></img>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-industry" size="lg" />
                    <h3>Company:</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" size="lg" />
                    <h3>Location:</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-regular fa-calendar-days" size="lg" />
                    <h3>Date:</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-person-digging" size="lg" />
                    <h3>Task:</h3>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard