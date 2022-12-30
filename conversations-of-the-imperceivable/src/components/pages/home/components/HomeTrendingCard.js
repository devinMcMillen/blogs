import React, { Component } from 'react';


export default class HomeTrendingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardStyles: { outlineStyle: 'none' },
        }

    }

    mouseEnterCard() {
        this.setState({ cardStyles: { outlineStyle: 'solid', outlineColor: '#00D1B2', outlineWidth: '0.3em' }});
    }
    mouseLeaveCard() {
        this.setState({ cardStyles: { outlineStyle: 'none' }});
    }
    showContent(path) {
        // TODO: Wrap up the routing to the content.
        console.log(path);
    }

    render() {
        return (
            <div
                className="box is-clickable"
                style={this.state.cardStyles}
                onClick={() => this.showContent("/article")}
                onMouseEnter={() => this.mouseEnterCard()}
                onMouseLeave={() => this.mouseLeaveCard()}>

                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item" aria-label="reply">
                                    <span className="icon is-small">
                                        <i className="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a className="level-item" aria-label="retweet">
                                    <span className="icon is-small">
                                        <i className="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a className="level-item" aria-label="like">
                                    <span className="icon is-small">
                                        <i className="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        );
    }

}
