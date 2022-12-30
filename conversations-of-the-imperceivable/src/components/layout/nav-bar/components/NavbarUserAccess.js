import React, { Component } from 'react';


export default class NavbarUserAccess extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-item">
                {/** Replace this with the anonymous icon button */}
                <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                </div>
            </div>
        );
    }
}
