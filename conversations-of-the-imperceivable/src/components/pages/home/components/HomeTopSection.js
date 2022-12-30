import React, { Component } from 'react';


export default class HomeTopSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section is-small has-background-light">
                <div className="columns">
                    <div className='column'>
                        <div className="container">
                            <h1 className="title">What are you interested in?</h1>
                            <h2 className="subtitle">
                                Try searching for topics, or submit a request for a topic to discuss.
                            </h2>
                        </div>
                        <input className="input is-rounded" type="text" placeholder="Search" style={{ marginTop: 20 }}></input>
                    </div>
                    <div className='column'>
                        {/** Hide image on small screens */}
                        <h1>Put image here</h1>
                    </div>
                </div>
            </section>
        );
    }
}
