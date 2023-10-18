import React from "react";
import './skillCard.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "../../../shared/progressBar";

class SkillCard extends React.Component {

    render() {
        return (
            <div className="skill-card" data-aos="fade-right">
                <div className="skill-cardly1">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body" data-aos="fade-right">
                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            {/* <FontAwesomeIcon icon="fa-brands fa-angular" /> */}
                            <span> Angular </span>
                            <ProgressBar className="progress-bar" progressLength={60} height={9} />
                        </div>
                        
                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Algorithm </span>
                            <ProgressBar className="progress-bar" progressLength={30} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            {/* <FontAwesomeIcon icon="fa-brands fa-bootstrap" /> */}
                            <span> Bootstrap </span>
                            <ProgressBar className="progress-bar" progressLength={70} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            {/* <FontAwesomeIcon icon="fa-brands fa-sass" /> */}
                            <span> Cordova </span>
                            <ProgressBar className="progress-bar" progressLength={80} height={9} />
                        </div>


                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            {/* <FontAwesomeIcon icon="fa-brands fa-css3" /> */}
                            <span> CSS3 </span>
                            <ProgressBar className="progress-bar" progressLength={80} height={9} />
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
                            <ProgressBar className="progress-bar" progressLength={30} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Figma </span>
                            <ProgressBar className="progress-bar" progressLength={50} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Firebase </span>
                            <ProgressBar className="progress-bar" progressLength={40} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Git V C </span>
                            <ProgressBar className="progress-bar" progressLength={40} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Github </span>
                            <ProgressBar className="progress-bar" progressLength={50} height={9} />
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly3">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body" data-aos="flip-up">

                    <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Google Suite </span>
                            <ProgressBar className="progress-bar" progressLength={75} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> HTML5 </span>
                            <ProgressBar className="progress-bar" progressLength={90} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Ionic </span>
                            <ProgressBar className="progress-bar" progressLength={75} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> JavaScript </span>
                            <ProgressBar className="progress-bar" progressLength={70} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> JQuery </span>
                            <ProgressBar className="progress-bar" progressLength={65} height={9} />
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly4">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body" data-aos="fade-down">

                    <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Nebular </span>
                            <ProgressBar className="progress-bar" progressLength={70} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> NestJS</span>
                            <ProgressBar className="progress-bar" progressLength={65} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Photoshop </span>
                            <ProgressBar className="progress-bar" progressLength={60} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> Prisma </span>
                            <ProgressBar className="progress-bar" progressLength={65} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> React </span>
                            <ProgressBar className="progress-bar" progressLength={65} height={9} />
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>

                <div className="skill-cardly5">
                    <div className="skill-cardly-head">
                        <div className="skill-cardly-title"></div>
                    </div>
                    <div className="skill-cardly-body" data-aos="fade-up">

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> SASS </span>
                            <ProgressBar className="progress-bar" progressLength={50} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> S V G </span>
                            <ProgressBar progressLength={65} height={9} />
                            {/* <ProgressBar className="progress-bar" progressLength={50} height={9} /> */}
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span>Typescript</span>
                
                            <ProgressBar className="progress-bar" progressLength={50} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> webpack </span>
                            <ProgressBar className="progress-bar" progressLength={50} height={9} />
                        </div>

                        <div>
                            {/* <img src="" alt="tech-logo" /> */}
                            <span> WordPress API </span>
                            <ProgressBar className="progress-bar" progressLength={60} height={9} />
                        </div>

                    </div>
                    <div className="skill-cardly-foot"></div>

                </div>
            </div>
        )
    }
}

export default SkillCard;