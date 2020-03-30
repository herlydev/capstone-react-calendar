import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navigation-container">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/lead">
                    Get Started
                </NavLink>
                <NavLink to="/contact">
                    Contact Us
                </NavLink>
            </div>
        )
    }
}