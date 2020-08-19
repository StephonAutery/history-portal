import React, { Component } from 'react';
import API from '../../utils/API';

export default class Navbar extends Component {

    state = {
        user: "",
        role: "",
        userID: JSON.parse(localStorage.getItem('loginData'))
    }

    componentDidMount() {
        if (localStorage.getItem('loginData')) {
            API.getUserById(this.state.userID.userid)
                .then(res => {
                    this.setState({
                        user: res.data.user,
                        role: res.data.user.role
                    });
                    // console.log(this.state.user.role);
                });
        }
    }

    isAdmin() {
        if (this.state.user.role === "admin" && this.state.user.role !== "") {
            return (
                <li className="nav-item">
                    <a className="nav-link" href="/users">Users</a>
                </li>
            );
        } else {
            return ("");
        }
    }

    render() {
        return (
            <div className="container w-75">

                <nav className="navbar m-0 p-0 bg-light border-left border-right">
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
                        {this.isAdmin()}
                    </ul>
                </nav>

            </div>
        )
    }
}