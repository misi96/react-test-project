import React, {Component, Fragment} from 'react';
import No from './no.png';
import './Full.css';

class Full extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    renderPanelWithTabs = () => {
        return (
            <div className="container">
                {this.renderTabs()}
                {this.renderTabContents()}
            </div>
        )
    };

    getPanelTabStyle = (event) => {
        return {
            background: this.state.activeTab === event ? '#FEFFFF' : '#DEE2EB'
        }
    };

    renderTabs = () => {
        return (
            <div className="row">
                <div className="col">
                    <div className="tags">
                        <button className="button2" type="rounded" onClick={() => {
                            this.handleTabClick(0)
                        }} style={this.getPanelTabStyle(0)}>Vélemények
                        </button>
                        <button className="button3" type="rounded" onClick={() => {
                            this.handleTabClick(1)
                        }} style={this.getPanelTabStyle(1)}>Értékelések
                        </button>
                    </div>
                </div>
            </div>
        )
    };

    handleTabClick = (event) => {
        console.log('event', event);
        this.setState({activeTab: event})
    };

    renderTabContents = () => {
        switch (this.state.activeTab) {
            case 1:
                return this.renderSecondTabContent();
            default:
                return this.renderFirstTabContent();
        }
    };

    renderFirstTabContent = () => {
        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <div className="opinion">
                            <div className="opinion__image"><img src={No} alt="no_arckep"/></div>
                            <div className="opinion__text">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam,<br/>
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo.
                                    Nemo enim ipsam voluptatem <br/>
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi <br/>
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur,</p>
                                <p className="opinion__text__name">Példa Kata</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="sep-line">
                            <hr/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="opinion">
                            <div className="opinion__image"><img src={No} alt="no_arckep"/></div>
                            <div className="opinion__text">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam,<br/>
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo.
                                    Nemo enim ipsam voluptatem <br/>
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi <br/>
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur,</p>
                                <p className="opinion__text__name">Példa Kata</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="sep-line">
                            <hr/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="more">
                            <a href="" className="more__text">MÉG TÖBB</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };

    renderSecondTabContent = () => {
        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <div className="opinion">
                            <div className="opinion__image"><img src={No} alt="no_arckep"/></div>
                            <div className="opinion__text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                                <p className="opinion__text__name">Példa Beáta</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="sep-line">
                            <hr/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="opinion">
                            <div className="opinion__image"><img src={No} alt="no_arckep"/></div>
                            <div className="opinion__text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                                <p className="opinion__text__name">Példa Beáta</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="sep-line">
                            <hr/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="more">
                            <a href="" className="more__text">MÉG TÖBB</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };

    renderLampRelatedQuestion = () => {
        return (
            <div className="row">
                <div className="col">
                    <div className="first_gyik">
                        <button type="button" className="button4"><i className="flaticon-down-arrow-1"></i>Mennyibe
                            kerülnek
                            a
                            lámpák?
                        </button>
                    </div>
                </div>
            </div>
        )
    };

    renderLoremIpsum = () => {
        return (
            <div className="row">
                <div className="col">
                    <div className="text1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div class="full">

                {this.renderPanelWithTabs()}

                <p class="inline_text">Gyakran ismétlődő kérdések</p>

                {this.renderLampRelatedQuestion()}

                {this.renderLoremIpsum()}

                {this.renderLampRelatedQuestion()}

                {this.renderLampRelatedQuestion()}

            </div>
        );
    }
}

export default Full;
