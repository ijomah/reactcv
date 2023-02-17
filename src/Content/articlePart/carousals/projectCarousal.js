import React from "react";
import './projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import weatherApp from '../../../images/weatherApp.jpg';
import simpleWithAngular from '../../../images/simpleWithAngular.jpg';
import twitterClone from '../../../images/twitterClone.jpg';
import searchbarwithgoogle from '../../../images/searchbarwithgoogle.jpg';
import schresult from '../../../images/schresult.jpg';

function ProjectStuff() {
    return (
        <div className="projects">
            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button onClick={()=>window.location.href='https://ijomah.github.io/schresult/'} >Demo</button>
                    <button onClick={()=>window.location.href='https://github.com/ijomah/schresult'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                    </button>
                    {/* <button><Link to='https://github.com/ijomah/searchingbarwithgoogle'>Source Code</Link></button> */}
                </div>
                <div className="proj-body">
                    <img src={schresult} loading="lazy" width="400" height="300" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>

            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button onClick={()=>window.location.href='https://cloudy-app-17494.web.app/'} >Demo</button>
                    <button onClick={()=>window.location.href='https://github.com/ijomah/cloud_app'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                    </button>
                    {/* <button><Link to='https://github.com/ijomah/cloud_app'>Source Code</Link></button> */}
                </div>
                <div className="proj-body">
                    <img src={weatherApp} loading="lazy" width="400" height="300" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>
            
            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button onClick={()=>window.location.href='https://ijomah.github.io/ijomahpaltiel/'}>Demo</button>
                    <button onClick={()=>window.location.href='https://github.com/ijomah/ijomahpaltiel'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                    </button>
                    {/* <button><Link to='https://github.com/ijomah/ijomahpaltiel'>Source Code</Link></button> */}
                </div>
                <div className="proj-body">
                    <img src={simpleWithAngular} loading="lazy" width="400" height="300" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>

            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button onClick={()=>window.location.href='https://ijomah.github.io/twitterLogin-clone/'}>Demo</button>
                    <button onClick={()=>window.location.href='https://github.com/ijomah/twitterLogin-clone'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                    </button>
                    {/* <Link to='https://github.com/ijomah/twitterLogin-clone'>Source Code</Link> */}
                </div>
                <div className="proj-body">
                    <img src={twitterClone} loading="lazy" width="400" height="300" alt="Description of weather information by location"></img>
                    {/* <p>Projects</p> */}
                </div>
                <div className="proj-footer">
                <div> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
            </div>
            </div>

            <div className="proj">
                <div className="proj-head">
                    <div className="proj-title"></div>
                    <button onClick={()=>window.location.href='https://ijomah.github.io/searchingbarwithgoogle/'}>Demo</button>
                    <button onClick={()=>window.location.href='https://github.com/ijomah/searchingbarwithgoogle'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                    </button>
                    {/* <button><Link to='https://github.com/ijomah/searchingbarwithgoogle'>Source Code</Link></button> */}
                </div>
                <div className="proj-body">
                    <img src={searchbarwithgoogle} loading="lazy" width="400" height="300" alt="Description of weather information by location"></img>
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