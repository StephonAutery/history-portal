import React, { Component } from 'react';

export default class QCompare extends Component {
    render() {
        let answer = "";
        if (this.props.response === this.props.answer || this.props.answer === "all" ){
            answer = <div>
                <p className="text-success">You answered: {this.props.response}</p>
                <p className="mb-0 text-success">Correct answer: {this.props.answer}</p>
            </div>
        } else {
            answer = <div>
                <p className="text-danger">You answered: {this.props.response}</p>
                <p className="mb-0 text-success">Correct answer: {this.props.answer}</p>
            </div>
        }
        return (
            answer
        );
    }
}