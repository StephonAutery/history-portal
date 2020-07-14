import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
// import PresInfo from "../info/presinfo.component";
import Navbar from "../layout/navbar.component";

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
        API.getPres()
            .then(res => {
                this.setState({
                    presidents: res.data
                })
            })
            .then(() => {
                this.setState({
                    presNum: 1,
                });
            })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit(present) {
        console.log(present);
        return (
            this.setState({
                presID: present,
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
                            <div className="pl-4 mt-2">
                                <h5>The Presidents of the United States of America</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {/* < div  className="card  m-1">
                                <div className="card-body">
                                    <div className="card-text"> */}
                                        {this.state.presidents.map((pres, index) => (
                                            <p key={index}>
                                                <button
                                                    className="btn btn-primary m-2"
                                                    type="submit"
                                                    onClick={() => this.handleFormSubmit(pres._id)}>
                                                    {pres.number} - {pres.president} <br />
                                                    {pres.took_office} - {pres.left_office}
                                                </button>
                                            </p>
                                        ))}
                                    {/* </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </Container >
        )
    }
}