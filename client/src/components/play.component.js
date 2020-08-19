import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../utils/API';
import Container from "./container.component";
import Navbar from "./layout/navbar.component";
import Footer from "./layout/footer.component";

export default class Landing extends Component {
    state = {
        redirect: "",
        user: ""
    }
    constructor(props) {
        super(props);
        this.playStephon = this.playStephon.bind(this);
        this.playSue = this.playSue.bind(this);
        this.playPres = this.playPres.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('loginData')) {
            this.setState({
                redirect: "landing",
            })
        }

        API.getUserById(this.props.location.state.id.userid)
            .then(res => {
                this.setState({
                    user: res.data.user
                });
            });
    }

    playStephon(event) {
        event.preventDefault();
        this.setState({
            redirect: "questions"
        });
    }

    playSue(event) {
        event.preventDefault();
        this.setState({
            redirect: "sueQuestions"
        });
    }

    playPres(event) {
        event.preventDefault();
        this.setState({
            redirect: "presidents"
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: JSON.parse(localStorage.getItem('loginData'))
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container w-75">

                    <div className="row">
                        <div className="col-sm-12">

                            <div className="card m-2 mt-3">
                                <h5 className="card-header">Question Sets</h5>
                                <div className="card-body">
                                    <p className="card-text">Question Sets are created by Community Activists, Historians, Public Servants, Citizens and others living and working in the Unites States of America and concerned about the effects of White Supremecy and it's lasting effects on society.</p>
                                    <p className="card-text">Question Sets are not tests.</p>
                                    <p className="card-text">The quiz format is intended to make the learning process fun. Your scores are not shared with anyone unless you share them. </p>


                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="row m-1">
                        <div className="col-sm-12 mb-2 mt-2">
                            <div className="accordion" id="accordionExample">


                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Stephon Autery
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                This Question Set was created for demonstration purposes. This Set includes questions about current events, US History and Pop Culture.
                                            </p>
                                            <p className="card-text">
                                                Stephon Autery identifies as a Black, cis gendered Male. He served 8 years in the United States Marine Corps, worked the last 15 years as a stay-at-home Dad and is now pursuing work as a Full Stack Developer after completeing the UC Berkeley Extension's Full Stack Developer Coding Boot Camp in June of 2020.
                                            </p>
                                            <button
                                                className="save btn btn-primary"
                                                onClick={this.playStephon}
                                                type="submit"
                                                value="submit">Go to Questions
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Susannah Levy
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                Susannah Levy created this Question Set. This Set includes questions about current events, US History and Pop Culture.
                                            </p>
                                            <p className="card-text">
                                                Susannah Levy identifies as a White, cis gendered Female. She has served as an OBGyn/Obstetrics Nurse at <a href="https://zuckerbergsanfranciscogeneral.org/about-us/" target="_blank" rel="noopener noreferrer">San Francisco General Hospital ( SFGH )</a> for the last 23 years and is the Mother of 2 adult children.
                                            </p>
                                            <button
                                                className="save btn btn-primary"
                                                onClick={this.playSue}
                                                type="submit"
                                                value="submit">Go to Questions
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Who's Your President?
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                This Question Set is still in development and will be updated soon. Once completed it will query the user about the true lives of our nation's leaders.
                                            </p>
                                            <p className="card-text">
                                                In the meantime enjoy this list of all of the Presidents of the United States of America.
                                            </p>
                                            <button
                                                className="save btn btn-primary"
                                                onClick={this.playPres}
                                                type="submit"
                                                value="submit">Go to Presidents
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Future Question Set
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                I am actively recruiting Civil Rights Leaders, Community Leaders, Teachers, Health Care Workers and others to create Question Sets that will inform our knowledge of the experiences of others as they go about their daily lives in the United States of America.
                                            </p>
                                            {/* <button
                                                    className="save btn btn-primary"
                                                    onClick={this.playSue}
                                                    type="submit"
                                                    value="submit">Go to Questions
                                                </button> */}
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>

                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                    </div>

                </div >
                <Footer />
            </Container>
        )
    }
}