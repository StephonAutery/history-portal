import React, { Component } from 'react';
import API from '../../utils/API';

export default class Navbar extends Component {

    state = {
        user: "",
        userID: JSON.parse(localStorage.getItem('loginData'))
    }

    componentDidMount() {
        if (localStorage.getItem('loginData')) {
            API.getUserById(this.state.userID.userid)
                .then(res => {
                    this.setState({
                        user: res.data.user
                    });
                });
        }
    }

    render() {
        return (
            <div className="container w-75">

                <nav className="navbar m-0 p-0 bg-light">
                    <ul className="nav ">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">History Portal</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item pr-3 pl-3">User&nbsp;:&nbsp;&nbsp;{this.state.user.name}</li>
                    </ul>
                </nav>


                <nav className="navbar m-0 p-0 bg-dark">
                    <ul className="nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Questions</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/presidents">Presidents</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/mystats">My Stats</a>
                        </li> */}
                    </ul>
                </nav>

            </div>
        )
    }
}