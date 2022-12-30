import React, { Component } from 'react';
import NavbarUserAccess from './components/NavbarUserAccess';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ backgroundColor: 'transparent', backgroundImage: 'none' }}>
                <div className="navbar-end" style={{ float: 'right' }}>
                    <NavbarUserAccess />
                </div>
            </nav>
        );
    }
}
