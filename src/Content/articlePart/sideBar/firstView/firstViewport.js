import React from "react"
import './firstViewport.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FirstView = () => {
    return (
        <div className="grided-view">  
            <div className="left-icons">
                <p><FontAwesomeIcon icon="fa-solid fa-xmark" opacity={0.3} className="x-mark" size="3x" /></p>                
                <p><FontAwesomeIcon icon="fa-solid fa-greater-than" opacity={0.5} className="greater-than-symbol" color="#3BD9F5" size="3x" /></p>
                <p><FontAwesomeIcon icon="fa-solid fa-circle" opacity={0.3} className="circle" size="3x" /></p>
            </div>
            <div className="middle-intro">
                <h3>Hello, 
                    <FontAwesomeIcon icon="fa-solid fa-hand" opacity={1} shake size="2x" color="#ffc83d" />
                </h3>
                <h3>Meet</h3>
                <h1>Ijomah Jacob Ifinwa</h1>
            </div>
            <div className="right-icons">
                <p><FontAwesomeIcon icon="fa-regular fa-clock" opacity={0.3} className="clocky" size="3x" spin /></p>
                <p><FontAwesomeIcon icon="fa-solid fa-play" opacity={0.5} className="play" size="3x" color="#3BD9F5" /></p>
                <p><FontAwesomeIcon icon="fa-solid fa-star" opacity={0.3} className="star" size="3x" spinPulse /></p>
            </div>
        </div>
    )
}

export default FirstView