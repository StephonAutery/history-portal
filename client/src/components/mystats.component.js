import React, { Component } from 'react';
import API from '../utils/API';
import Container from "./container.component";

export default class Users extends Component {
    state = {
        users: [],
        questions: [],
        count: 0,
        stats: [],
        user: [],
        percentageCorrect: Math.round(this.props.location.state.numRight / this.props.location.state.answers.length * 100),
        percentageIncorrect: Math.round(this.props.location.state.numWrong / this.props.location.state.answers.length * 100)
    }

    componentDidMount() {
        // API call to save answers to database
        API.saveResults({
            userID: this.props.location.state.id,
            answerResult: this.props.location.state.answers,
            questionSet: "questions"
        });
        API.saveStats({
            userID: this.props.location.state.id,
            numRight: this.props.location.state.numRight,
            numWrong: this.props.location.state.numWrong,
            percentageCorrect: this.state.percentageCorrect,
            percentageIncorrect: this.state.percentageIncorrect,
            questionSet: "questions"
        });
        // get question set from databse to show answers
        API.getQuestions()
            .then(res => {
                this.setState({
                    questions: res.data
                })
            });
        // get users historical results from database
        API.getResults()
            .then(res => {
            });

        API.findUserStatsByID(this.props.location.state.id)
            .then(res => {
                this.setState({
                    stats: res.data,
                })
            });

        API.getUserById(this.props.location.state.id)
            .then(res => {
                this.setState({
                    user: res.data.user
                })
                console.log("----- user -");
                console.log(this.state.user.name);
            });
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            < Container >
                <div className="container w-75">
                    <hr />

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card m-1">
                                <div className="card-body">
                                    <h5 className="card-title">Your Statistics</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card m-1">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.user.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card border-success m-1">
                                <div className="card-body text-success">
                                    <h5 className="card-title">Number Correct</h5>
                                    <hr />
                                    <p className="card-text">{this.props.location.state.numRight}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card border-success m-1">
                                <div className="card-body text-success">
                                    <h5 className="card-title">Percentage Correct</h5>
                                    <hr />
                                    <p className="card-text">{this.state.percentageCorrect}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card border-danger m-1">
                                <div className="card-body text-danger">
                                    <h5 className="card-title">Number Incorrect</h5>
                                    <hr />
                                    <p className="card-text">{this.props.location.state.numWrong}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card border-danger m-1">
                                <div className="card-body text-danger">
                                    <h5 className="card-title">Percentage Incorrect</h5>
                                    <hr />
                                    <p className="card-text">{this.state.percentageIncorrect}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container >
        )
    }
}