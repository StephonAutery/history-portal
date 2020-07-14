import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../utils/API';
import Container from "./container.component";
import Navbar from "./layout/navbar.component";

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
        console.log(this.props);
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
                    <form>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pl-4 mt-2">
                                    <h5>Question Sets</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card m-1">
                                    <h5 className="card-header">Stephon Autery</h5>
                                    <div className="card-body">
                                        <p className="card-text">Stephon Autery identifies as a Black, cis gendered Male. He served 8 years in the United States Marine Corps, worked the last 14 years as a Stay at Home Dad and is now pursuing work as a Full Stack Developer after completeing the UC Berkeley Extension's Full Stack Developer Coding Boot Camp in June of 2020.</p>
                                        <button
                                            className="save btn btn-primary"
                                            onClick={this.playStephon}
                                            type="submit"
                                            value="submit">Stephon's Questions
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card m-1">
                                    <h5 className="card-header">Susannah Levy</h5>
                                    <div className="card-body">
                                        <p className="card-text">Susannah Levy identifies as a White, cis gendered Female. She has served as an OBGyn/Obstetrics Nurse at <a href="https://zuckerbergsanfranciscogeneral.org/about-us/" target="_blank" rel="noopener noreferrer">San Francisco General Hospital ( SFGH )</a> for the last 23 years and is the Mother of 2 adult children.
                                    </p>
                                        <button
                                            className="save btn btn-primary"
                                            onClick={this.playSue}
                                            type="submit"
                                            value="submit">Susannah's Questions
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card m-1">
                                    <h5 className="card-header">Who's Your President</h5>
                                    <div className="card-body">
                                        <p className="card-text">Explore the unfiltered histories of the Presidents of the United States.</p>
                                        <p className="card-text">Even today, text books in US schools vary wildly from one school district to the next and one thing they have in common is a biased editing of the history of the American Presidency based on the continuation of White Supremacy. Eplore the unbiased history of the Presidents of the United Sates of America and pick your favorite!</p>
                                        <button
                                            className="save btn btn-primary"
                                            onClick={this.playPres}
                                            type="submit"
                                            value="submit">Who's Your President
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div >
            </Container>
        )
    }
}