import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";

export default class Questions extends Component {
    state = {
        switch: true,
        redirect: "",
        presidents: [],
        questionSet: "getQuestions",
        selectedOption: '',
        presNum: 0,
        presID: ""
    }

    componentDidMount() {
        if (localStorage.getItem('loginData')) {
            API.getPres()
                .then(res => {
                    this.setState({
                        presidents: res.data,
                        userID: (JSON.parse(localStorage.getItem('loginData')))
                    })
                })
                .then(() => {
                    this.setState({
                        presNum: 1,
                    });
                })
        } else {
            this.setState({
                redirect: "/landing"
            })
        }
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit(pres) {
        return (
            this.setState({
                presID: pres,
                redirect: "/presinfo"
            })
        );
    }

    getPres() {
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to next page
                pathname: this.state.redirect,
                state: {
                    // id: this.props.location.state.id,
                    pres: this.state.presID
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                <div className="row">
                        <div className="col-sm-12">
                            <div className="card bg-light m-1 mt-4">
                                <h5 className="card-header">1</h5>
                                <div className="card-body">
                                    <p className="card-text">2</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pl-4 mt-2">
                                <h5>The Presidents of the United States of America</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {this.state.presidents.map((pres, index) => (
                            <div key={index} className="col-sm-12 p-2">


                                <h6 className="card-header" onClick={() => this.handleFormSubmit(pres._id)}>{pres.number} - {pres.president}</h6>
                                <h6 className="p-3">{pres.took_office} - {pres.left_office}</h6>


                            </div>
                        ))}
                    </div>

                </div>
                <Footer />
            </Container >
        )
    }
}