import React from "react";
import './projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import weatherApp from '../../../images/weatherApp.jpg';
import simpleWithAngular from '../../../images/simpleWithAngular.jpg';
import twitterClone from '../../../images/twitterClone.jpg';
import searchbarwithgoogle from '../../../images/searchbarwithgoogle.jpg';

function ProjectStuff() {
    return (
        <div className="projects">
            <div className="proj1">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button ><Link to='https://cloudy-app-17494.web.app/'>Demo</Link></button>
                    <button><Link to='https://github.com/ijomah/cloud_app'>Source Code</Link></button>
                </div>
                <div className="proj-body">
                    <img src={weatherApp} loading="lazy" width="600" height="600" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>
            
            <div className="proj2">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button ><Link to='https://ijomah.github.io/ijomahpaltiel/'>Demo</Link></button>
                    <button><Link to='https://github.com/ijomah/ijomahpaltiel'>Source Code</Link></button>
                </div>
                <div className="proj-body">
                    <img src={simpleWithAngular} loading="lazy" width="600" height="600" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>

            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button ><Link to='https://cloudy-app-17494.web.app/'>Demo</Link></button>
                    <button><Link to='https://github.com/ijomah/twitterLogin-clone'>Source Code</Link></button>
                </div>
                <div className="proj-body">
                    <img src={twitterClone} loading="lazy" width="600" height="600" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>

            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button ><Link to='https://cloudy-app-17494.web.app/'>Demo</Link></button>
                    <button><Link to='https://github.com/ijomah/searchingbarwithgoogle'>Source Code</Link></button>
                </div>
                <div className="proj-body">
                    <img src={searchbarwithgoogle} loading="lazy" width="600" height="600" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>
        </div>
    )
}

export default ProjectStuff