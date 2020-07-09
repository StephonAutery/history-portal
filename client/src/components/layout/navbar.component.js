import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../utils/API';

export default class Navbar extends Component {


    render() {
        return (
            <div className="container w-75">
                <ul className="nav ">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">History Portal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Play</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        )
    }
}