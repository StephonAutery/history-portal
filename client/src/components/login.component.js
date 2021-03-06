import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Container from "./container.component";
import Navbar from "./layout/navbar.component";
import API from "../utils/API";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: false,
        userID: "",
        redirect: null
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = event => {
        // console.log(this.state.email);
        // console.log(this.state.password);
        if (this.state.email === ""){
            this.setState({
                redirect: 'play'
            });
        }
        event.preventDefault();
        API.loginUser({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log("----- res -")
                console.log(res.status);

                if (res.status === 200) {
                    API.getUserId({
                        email: this.state.email
                    }).then(res => {
                        // update users state
                        // set redirect state
                        localStorage.setItem('loginData', JSON.stringify({ userid: res.data.id._id }));
                        this.setState({
                            loggedIn: true,
                            userID: JSON.parse(localStorage.getItem('loginData')),
                            redirect: 'play'
                        });
                    });
                }
            }).catch(err => {
                console.log(err.response.status);
                if (err.response.status === 400){
                    console.log("----- bad password -")
                } else if (err.response.status === 404){
                    console.log("----- bad username -")
                }
                // console.log(this.res.status);
                console.log("dang!");
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: this.state.userID,
                    loggedIn: this.state.loggedIn
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container p-2 w-50">
                    <h4><p>welcome to History Portal, please login</p></h4>
                    <h5><p>or</p></h5>
                    <h6><p><a className="nav-link" href="/signup">sign up</a></p></h6>
                    <hr />
                    <form>
                        <label htmlFor="email">
                            &nbsp;&nbsp;email:
                        <p>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="enter email"
                                    autoComplete="email"
                                    onChange={this.handleChange}
                                />
                            </p>
                        </label>
                        <br />
                        <label htmlFor="password">
                            &nbsp;&nbsp;password:
                        <p>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </p>
                        </label>
                        <hr />
                        <p>
                            <button
                                className="save btn btn-danger"
                                onClick={this.handleFormSubmit}
                                type="submit"
                                value="submit">login
                        </button>
                        </p>

                    </form>
                </div>
            </Container>
        )
    }
}