import React from "react";

function QInfo(props) {
    return (
        <div>
            <p>{props.info}</p>
            {props.links.map((link, index) => (
                <p key={index} className="mb-0"><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></p>
            ))}
        </div>
    );
}

export default QInfo;