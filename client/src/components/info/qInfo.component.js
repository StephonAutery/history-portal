import React from "react";

function QInfo(props) {
    console.log(props)
    return (
        <div className="card-text">
            <p>You answered: {props.response}</p>
            <p>Correct answer: {props.answer}</p>
            <hr />
            <p>{props.info}</p>
        <hr />
        </div>
    );
}

export default QInfo;
