import React, { Component } from 'react';
import HomeTrendingCard from "./HomeTrendingCard";


export default class HomeTrending extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section is-small has-background-dark">
                <div className="columns">
                    <div className='column'>
                        <div className="container">
                            <HomeTrendingCard />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="container">
                            <HomeTrendingCard />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="container">
                            <HomeTrendingCard />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
