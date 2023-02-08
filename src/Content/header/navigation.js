import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './nav.css';
function Navigation() {
    
    
        return (
            <Fragment>
                <nav>
                    <Link className="nav-link" to='/'>
                        <div>Home <FontAwesomeIcon icon="fa-solid fa-house " color="white" /></div>
                    </Link>
                    <Link className="nav-link" to='/course'>
                        <div>Courses <FontAwesomeIcon icon="fa-solid fa-graduation-cap" color="white" /></div>
                    </Link>
                    <Link className="nav-link" to='/book'>
                        <div>Books <FontAwesomeIcon icon="fa-solid fa-book" color="white" /></div>
                    </Link>
                    <Link className="nav-link" to='https://app.pluralsight.com/achievements/share/3222515c-c711-43bc-89ba-eac524dd8bfc'>
                        <div>Fun Fact <FontAwesomeIcon icon="fa-solid fa-face-smile-wink" color="white" /></div>
                    </Link>
                    <Link className="nav-link" to='project'>
                        <div>Project <FontAwesomeIcon icon="fa-solid fa-diagram-project" color="white" /></div>
                    </Link>
                </nav>
                <Outlet />
            </Fragment>
        )
}

export default Navigation