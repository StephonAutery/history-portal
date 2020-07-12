import React from "react";

function QInfo(props) {
    console.log(props.links)
    return (
        <div className="card-text">
            <p>You answered: {props.response}</p>
            <p>Correct answer: {props.answer}</p>
            <hr />
            <p>{props.info}</p>
                { props.links.map((link, index) => (
                <p key={index}><a href={ link.link } target="_blank" rel="noopener noreferrer">{link.link}</a></p>
            )) }
            <hr />
        </div>
    );
}

export default QInfo;
