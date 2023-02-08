import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  courseNGfunda from "../../../images/courseNGfunda.jpg";
import  courseCss from "../../../images/courseCss.jpg";
import  courseDSA from "../../../images/courseDSA.jpg";
import  courseFigma from "../../../images/courseFigma.jpg";
import  courseGit from "../../../images/courseGit.jpg";
import  courseHTML from "../../../images/courseHTML.jpg";
import './courses.css';

function Courses() {
    return (
        <div className="courses">
            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseNGfunda} alt="Completed Angular course badge"/>
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseCss} alt="" />
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseDSA} alt="" />
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseGit} alt=""></img>
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseFigma} alt=""></img>
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

            <div className="course">
                <div className="course-head">
                    <div className="course-title">from store</div>
                </div>
                <div className="course-body">
                    <img src={courseHTML} alt=""></img>
                    <p>Courses extract</p>
                </div>
                <div className="course-footer">
                    <div>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
                </div>
            </div>

        </div>
    )
}

export default Courses