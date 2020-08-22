import React, { Component } from 'react';
import API from '../utils/API';
import Container from "./container.component";
import Navbar from "./layout/navbar.component";
import { Redirect } from "react-router-dom";

export default class Users extends Component {
    state = {
        selectedOption: "",
        users: [],
        tank: ""
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                // console.log(res.data);
                this.setState({
                    users: res.data
                })
            });
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit() {
        if (this.state.selectedOption) {
            this.setState({
                tank: this.state.selectedOption,
                selectedOption: "",
                redirect: "/questions"
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: this.state.tank
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container radio w-75">

                    <div className="row">
                        <div className="col-sm-12 m-2">
                            <h3><p>users</p></h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row m-2">
                        {this.state.users.map(user => (
                            <div className="col-sm-6" key={user._id}>
                                <div className="card m-2">
                                    <div className="card-header">{user.name}</div>
                                    <div className="card-body">
                                        <p className="card-text">{user.race}</p>
                                        <p className="card-text">{user.role}</p>
                                        <p className="card-text">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        )
    }
}