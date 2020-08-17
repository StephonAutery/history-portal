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

                            <div className="card m-1">
                                <h5 className="card-header">Question Sets</h5>
                                <div className="card-body">
                                    <p className="card-text">Question Sets are created by community activists, historians, public servants and citizens living and working in the Black community.</p>
                                    <p className="card-text">Question Sets are not tests. The quiz format is intended to make the learning process fun. Your scores are not shared with anyone unless you share them. </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="row m-1">
                        <div className="col-sm-12 mb-2">
                            <div class="accordion" id="accordionExample">


                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Stephon Autery
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                Stephon Autery identifies as a Black, cis gendered Male. He served 8 years in the United States Marine Corps, worked the last 14 years as a Stay at Home Dad and is now pursuing work as a Full Stack Developer after completeing the UC Berkeley Extension's Full Stack Developer Coding Boot Camp in June of 2020.
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

                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Susannah Levy
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
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


                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Who's Your President?
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                This Question Set is about Presidents of the United States of America.
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


                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Future Question Set
                                                </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p className="card-text">
                                                This will be the location of the Bio and other information about the creator of this question set and it's teaching goals.
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