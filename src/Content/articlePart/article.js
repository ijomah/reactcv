import React from "react";
//import Cardly from "../../shared/reusableCardComponent";
import AsideQoutes from "./sideBar/quotes";
import './article.css'
import BooksRead from "./carousals/bookCarousal";
import SkillCard from "./skills/skillCard";
import jc1 from '../../images/jc1.jpg';
import Courses from "./carousals/courseCarousal";
import ExperienceCard from "../../shared/experienceCard";
import Educate from "./edu/educationCard";
//import FunFact from "./carousals/funFacts";
import FirstView from "./firstView/firstViewport";
import ProjectStuff from "./carousals/projectCarousal";
import ContactMe from "./contactForm/contact";
import { useMediaQuery } from "@uidotdev/usehooks";

function MainArticle() {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return (
        <article className={isSmallDevice ? 'active' : ''}>
            {/* <FunFact /> */}
           <section className="viewport-page">
              <FirstView />
           </section>

           <div data-aos="fade-left">
                <aside>
                        <AsideQoutes />
                </aside>
            </div>
            
            <section className="cards">
                <div data-aos="fade-right">
                    <img className="profile-pix" src={jc1} alt="site owner"  />
                </div>
              
                {/* ABOUT ME */}
            </section>

            <section className="skill-section">
                <div data-aos="zoom-in-right">
                    <h2>HARD CORE SKILL</h2>
                </div>
                
                <SkillCard />
            </section>

            <section>
                <div data-aos="zoom-out-right">
                    <h2>EXPERIENCE</h2>
                </div>
            
            <ExperienceCard />
            </section>

            <section>
                <div data-aos="zoom-in-right">
                    <h2>EDUCATION</h2>
                </div>
                
                <Educate />
            </section>

            <section className="carousal">
                <div data-aos="zoom-in-right">
                    <h2>BOOKS</h2>
                </div>
                <BooksRead />
            </section>

            <section className="carousal">
                <div data-aos="zoom-in-right">
                    <h2>COURSES</h2>
                </div>
            </section>
            <Courses />

            <section className="carousal">
                <div data-aos="zoom-in-right">
                    <h2>PROJECTS</h2>
                </div>
            </section>
            <ProjectStuff />

            <ContactMe />
        </article>
    )
}

export default MainArticle