import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Navbar from "./layout/navbar.component";
import Container from "./container.component";

export default class Landing extends Component {
    state = {
        redirect: ""
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: JSON.parse(localStorage.getItem('loginData')),
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                    <div className="row justify-content-center">

                        <div className="col-sm-12 p-2 m-1 text-center">
                            <h3><p>Welcome to History Portal!</p></h3>
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="card m-2">
                                <div className="card-body">
                                    <h4 className="card-title">History Portal is a Social Awareness Application.</h4>
                                    <hr />
                                    <p className="card-text">I hope you'll play with your friends and discover something about our country and  yourself.</p>
                                    <a href="/login" className="btn btn-danger">go to login</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card m-2">
                                <div className="card-body">
                                    <h4 className="card-title">This is not a competition.</h4>
                                    <hr />
                                    <p className="card-text">There is no timer and no one can see your score unless YOU share it with them.</p>
                                    <a href="/signup" className="btn btn-primary">go to sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </Container>
        )
    }
}