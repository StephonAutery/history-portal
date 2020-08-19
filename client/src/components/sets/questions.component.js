import React, { Component } from 'react';
import API from '../../utils/API';
import Container from "./../container.component";
import QInfo from "../info/qInfo.component";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";

export default class Questions extends Component {
    state = {
        questions: [],
        question: {},
        user: "",
        answers: [],
        results: [],
        answerID: 0,
        userID: "",
        answered: false,

        questionSet: "getQuestions",

        selectedOption: '',
        questionNum: 0,
        answerResult: [],
        numRight: 0,
        numWrong: 0,
        pCorrect: 0,
        pIncorrect: 0,
        id: ""
    }

    componentDidMount() {
        API.getQuestions()
            .then(res => {
                this.setState({
                    questions: res.data
                });
            })
            .then(res => {
                this.setState({
                    questionNum: 1,
                    question: this.state.questions[this.state.questionNum],
                    userID: JSON.parse(localStorage.getItem('loginData'))
                });
                API.getUserById(this.state.userID.userid)
                    .then(res => {
                        this.setState({
                            user: res.data.user
                        });
                    });
            });
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    setQuestion() {
        this.setState({
            questionNum: this.state.questionNum + 1,
            question: this.state.questions[this.state.questionNum]
        });
    }

    handleFormSubmit() {
        //get the answer
        if (this.state.selectedOption) {
            this.setState({
                answered: false
            })
            if (this.state.question.answer === this.state.selectedOption || this.state.question.answer === 'all') {
                // if they get it right
                this.setState({
                    numRight: this.state.numRight + 1,
                    answerResult: this.state.answerResult.concat('right'),
                    selectedOption: ''
                });
            } else {
                // if they get it wrong
                this.setState({
                    numWrong: this.state.numWrong + 1,
                    answerResult: this.state.answerResult.concat('wrong'),
                    selectedOption: ''
                });
            }
            // if all the questions are answered, redirect to the stats page
            if (this.state.questionNum === this.state.questions.length) {
                this.setState({
                    redirect: "/mystats"
                });
            } else {
                this.setQuestion();
            }
        }
    }

    qAnswered() {
        if (this.state.selectedOption) {
            this.setState({
                answered: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to mystats page
                pathname: this.state.redirect,
                state: {
                    id: this.state.userID.userid,
                    answers: this.state.answerResult,
                    numRight: this.state.numRight,
                    numWrong: this.state.numWrong,
                    pCorrecet: this.state.pCorrect,
                    pIncorrect: this.state.pIncorrect
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container radio w-75">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card bg-light m-1 mt-4">
                                <h5 className="card-header">Question {this.state.questionNum}</h5>
                                <div className="card-body">
                                    <p className="card-text">{this.state.question.question}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-1">
                        <div className="col-sm-12">
                            {!this.state.answered
                                ?
                                <div className="card bg-light m-1">
                                    <div className="card-body">

                                        <div className="card-text">
                                            <label>
                                                a.&nbsp;&nbsp;
                                            <input
                                                    type="radio"
                                                    value="a"
                                                    checked={this.state.selectedOption === "a"}
                                                    onChange={this.onValueChange}
                                                />
                                                &nbsp;&nbsp;{this.state.question.a}
                                            </label>
                                        </div>

                                        <div className="card-text">
                                            <label>
                                                b.&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    value="b"
                                                    checked={this.state.selectedOption === "b"}
                                                    onChange={this.onValueChange}
                                                />
                                                &nbsp;&nbsp;{this.state.question.b}
                                            </label>
                                        </div>

                                        <div className="card-text">
                                            <label>
                                                c.&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    value="c"
                                                    checked={this.state.selectedOption === "c"}
                                                    onChange={this.onValueChange}
                                                />
                                                &nbsp;&nbsp;{this.state.question.c}
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                :
                                ""}
                        </div>
                    </div>

                    <div className="row m-1">
                        <div className="col-sm-12">
                            <div className="card bg-light m-1">
                                <div className="card-body">

                                    <div className="card-text m-0">
                                        {!this.state.answered ?
                                            <button
                                                onClick={() => this.qAnswered()}
                                                className="save btn btn-info"
                                                type="submit">answer
                                            </button>
                                            : ""}
                                        {this.state.answered ?
                                            <QInfo
                                                response={this.state.selectedOption}
                                                answer={this.state.question.answer}
                                                ID={this.state.question._id}
                                                info={this.state.question.info}
                                                links={this.state.question.links}
                                            />
                                            : ""}
                                    </div>

                                    <div className="card-text">
                                        {this.state.answered ?
                                            <button
                                                onClick={() => this.handleFormSubmit()}
                                                className="save btn btn-danger"
                                                type="submit">next question
                                            </button>
                                            : ""}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </Container>
        )
    }
}