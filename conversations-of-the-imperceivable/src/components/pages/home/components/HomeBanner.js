import React, { Component } from 'react';


export default class HomeBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section is-small has-background-primary-light">
                <div className="container">
                    <h1 className="title">Put the banner here.</h1>
                </div>
            </section>
        );
    }
}
