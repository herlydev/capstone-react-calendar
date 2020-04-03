import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


import "./navigation-container.scss"
// import navLogoImage from "../../../src/components/images"


export default class NavigationComponent extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navigation-container">
                <div className="nav-left">
                   
                    {/* <img src={'../../../src/components/images/Tax-EZ-logo-B.jpg'} alt="Logo"/> */}
                </div>
                <div className="nav-center">
                    <div className="nav-link-wrapper">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/lead">
                            Get Started
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact">
                            Contact Us
                        </NavLink>
                    </div>
    
                </div>

                <div className="nav-right">
                    <button>Log In</button>
                </div>
                
            </div>
        )
    }
}