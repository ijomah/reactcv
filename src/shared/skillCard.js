import React from "react";
import './skillCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SkillCard extends React.Component {

    render() {
        return (
            <div className="skill-card">
                <div className="skill-cardly1">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body">
                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <FontAwesomeIcon icon="fa-brands fa-angular" />
                            <span> Angular </span>
                            <span className="progress-bar"></span>
                        </div>
                        
                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Algorithm </span>
                            <span className="progress-bar"><span className="progress-bar-indcator"></span></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                            <span> Bootstrap </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <FontAwesomeIcon icon="fa-brands fa-sass" />
                            <span> Cordova </span>
                            <span className="progress-bar"></span>
                        </div>


                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <FontAwesomeIcon icon="fa-brands fa-css3" />
                            <span> CSS3 </span>
                            <span className="progress-bar"></span>
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly2">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body">

                    <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Data Structures </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Figma </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Firebase </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Git V C </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Github </span>
                            <span className="progress-bar"></span>
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly3">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body">

                    <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Google Suite </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> HTML5 </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Ionic </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> JavaScript </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> JQuery </span>
                            <span className="progress-bar"></span>
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly4">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body">

                    <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Nebular </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> NestJS</span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Photoshop </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Prisma </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> React </span>
                            <span className="progress-bar"></span>
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly5">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body">

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> SASS </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> SVG </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span>Typescript</span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> webpack </span>
                            <span className="progress-bar"></span>
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> WordPress API </span>
                            <span className="progress-bar"></span>
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>
            </div>
        )
    }
}

export default SkillCard;