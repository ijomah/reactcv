import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceCard from "./experienceCard";
import './reusableCard.css';

function Cardly() {
    return (
        <div>
            <div className="cardly">
                <div className="cardly-head">
                    <div className="cardly-head-title">
                        <h2>EXPERIENCE</h2      >
                    </div>
                </div>
                
                <div className="cardly-body">
                    <img src="" alt=""></img>
                    <ExperienceCard />
                </div>
                
                <div className="cardly-footer">
                    <div><FontAwesomeIcon icon="fa-regular fa-heart" size="lg" /></div>
                </div>
            </div>
        </div>
    )
}

export default Cardly