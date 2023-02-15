import React from "react";
//import Cardly from "../../shared/reusableCardComponent";
import AsideQoutes from "./sideBar/quotes";
import './article.css'
import BooksRead from "./carousals/bookCarousal";
import SkillCard from "../../shared/skillCard";
import jc1 from '../../images/jc1.jpg';
import Courses from "./carousals/courseCarousal";
import ExperienceCard from "../../shared/experienceCard";
import Educate from "./edu/educationCard";
//import FunFact from "./carousals/funFacts";
import FirstView from "./sideBar/firstView/firstViewport";
import ProjectStuff from "./carousals/projectCarousal";


function MainArticle() {
    return (
        <article>
            {/* <FunFact /> */}
           <section className="viewport-page">
              <FirstView />
           </section>
            <aside>
                <AsideQoutes />
            </aside>
            
            <section className="cards">
              <img className="profile-pix" src={jc1} alt="site owner"  />
                {/* ABOUT ME */}
            </section>

            <section className="skill-section">
                <h2>HARD CORE SKILL</h2>
                <SkillCard />
            </section>

            <section>
            <h2>EXPERIENCE</h2>
            <ExperienceCard />
            </section>

            <section>
                <h2>EDUCATION</h2>
                <Educate />
            </section>

            <section className="carousal">
                <BooksRead />
            </section>

            <section className="carousal">
                
            </section>
            <Courses />

            <section className="carousal">
                <h2>PROJECT</h2>
                
            </section>
            <ProjectStuff />
        </article>
    )
}

export default MainArticle