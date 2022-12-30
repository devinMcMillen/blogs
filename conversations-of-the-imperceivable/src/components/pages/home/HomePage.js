import React, { Component } from 'react';
import HomeBanner from "./components/HomeBanner";
import HomeTopSection from "./components/HomeTopSection";
import HomeTrending from "./components/HomeTrending";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomeBanner></HomeBanner>
                <HomeTopSection></HomeTopSection>
                <HomeTrending></HomeTrending>
                <HomeTrending></HomeTrending>
            </div>
        );
    }
}