import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './nav.css';


function Navigation() {
    let elem = useRef();
    //const [menuState, toggleMenuState ] = useState(0)

    const toggleMenu = () => {
        console.log("elememt ", elem.current);
        if(elem.current.className === "") {
            elem.current.className += "responsive";
        } else {
            elem.current.className = ""
        }
    };

    useEffect(toggleMenu)
    
        return (
            <Fragment>
                <header>
                    <nav ref={elem}>
                        <Link className="nav-link" href="/" to='/'>
                            <div>Home <FontAwesomeIcon icon="fa-solid fa-house " color="white" /></div>
                        </Link>
                        <Link className="nav-link" href="#course" to='/course'>
                            <div>Courses <FontAwesomeIcon icon="fa-solid fa-graduation-cap" color="white" /></div>
                        </Link>
                        <Link className="nav-link" href="#book" to='/book'>
                            <div>Books <FontAwesomeIcon icon="fa-solid fa-book" color="white" /></div>
                        </Link>
                        <Link className="nav-link" href="#fun" to='/fun'>
                            <div>Fun Fact <FontAwesomeIcon icon="fa-solid fa-face-smile-wink" color="white" /></div>
                        </Link>
                        <Link className="nav-link" href="#project" to='project'>
                            <div>Project <FontAwesomeIcon icon="fa-solid fa-diagram-project" color="white" /></div>
                        </Link>
                        <Link className="nav-link" onClick={toggleMenu} href="#" to=''>
                            <div>Menu<FontAwesomeIcon className="icon-menu" icon="fa-solid fa-bars" color="white" /> </div>
                        </Link>
                    </nav>
                </header>
                <Outlet />
            </Fragment>
        )
}

export default Navigation