import React from "react";
import Cardly from "../../shared/reusableCardComponent";
import AsideQoutes from "./sideBar/quotes";
import './article.css'
import BooksRead from "./carousals/bookCarousal";
import SkillCard from "../../shared/skillCard";
import jc1 from '../../images/jc1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Courses from "./carousals/courseCarousal";


function MainArticle() {
    return (
        <article>
            <section className="viewport-page">
            <h3>Hello, 
                <FontAwesomeIcon icon="fa-solid fa-hand" opacity={1} shake size="2x" color="#ffc83d" />
                
            </h3>
            
                <h3>Meet</h3>
               
                <h1>Ijomah Jacob Ifinwa</h1>
                <div className="decorated-icons">
                <FontAwesomeIcon icon="fa-solid fa-greater-than" opacity={0.1} className="greater-than-symbol" size="3x" />
                    <FontAwesomeIcon icon="fa-regular fa-clock" opacity={0.1} className="clocky" size="3x" spin />
                    <FontAwesomeIcon icon="fa-solid fa-play" opacity={0.1} className="play" size="3x" />
                    
                    <FontAwesomeIcon icon="fa-solid fa-xmark" opacity={0.1} className="x-mark" size="3x" />
                    <FontAwesomeIcon icon="fa-solid fa-star" opacity={0.1} className="star" size="3x" spinPulse />
                    
                    <FontAwesomeIcon icon="fa-solid fa-list" opacity={0.1} className="list" size="3x" />
                    <FontAwesomeIcon icon="fa-solid fa-circle" opacity={0.1} className="circle" size="3x" />
                </div>
            </section>
            <aside>
                <AsideQoutes />
            </aside>
            
            <section className="cards">
              <img className="profile-pix" src={jc1} alt="site owner"  />
                ABOUT ME
            </section>

            <section className="skill-section">
                <h2>HARD CORE SKILL</h2>
                <SkillCard />
            </section>

            <section>
            <h2>EXPERIENCE</h2>
            <p>
                Bincom ICT SOLUTION - Lagos
                June 2021 to November 2022.
                Edit HTML and CSS for a production Ed-tech application making minor changes.
                Worked on responsive web and mobile applications
                Debugged SASS file to implement style changes to a LMS application.
                Able to read, write reusable code and debug Javascript snippets to implement automatic logout logic for a production application.
                Developed application features that meets business needs
                Translated users’ story to features and finally code 
                Designed official flyers with accurate typography and color shades
                Designed wireframes using Figma and converted designs to codes.
                Did technical documentation with screenshots of finished functionality.
                Worked with Jira and Slack for work delivery
                Good understanding running test with npm
            </p>
            </section>

            <section>
                <div>
                    <h2>EDUCATION</h2>
                    <p>Bachelors in Physics</p>
                    <p>Delta State University - Nigeria</p>
                    <p>January 2006 to December 2009</p>
                </div>
            </section>

            <section className="carousal">
                PROJECT
                <Cardly />
            </section>

            <section className="carousal">
                <BooksRead />
            </section>

            <section className="carousal">
                
            </section>
            <Courses />
        </article>
    )
}

export default MainArticle