import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
import PresInfo from "../info/presInfo.component";
import Navbar from "../layout/navbar.component";

export default class Questions extends Component {
    state = {
        switch: true,
        redirect: "",
        presidents: [],
        questionSet: "getQuestions",
        selectedOption: '',
        presNum: 0,
        pres: ""
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

    handleFormSubmit = event => {
        return (
            <PresInfo />
        );

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to next page
                pathname: this.state.redirect,
                state: {
                    id: this.props.location.state.id,
                    pres: this.state.pres._id
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
                        <div col-sm-3>
                            {this.state.presidents.map((pres, index) => (
                                < div key={index} className="card  m-1">
                                    <div key={pres._id} className="card-body">
                                        <div className="card-text">
                                            <h4>{pres.president}</h4><hr></hr>
                                            <h4>{pres.number}</h4>
                                                birth year: {pres.birth_year}  <br />
                                                took office: {pres.took_office}<br />
                                                left office: {Date(pres.left_office)}<br />
                                                death year: {Date(pres.death_year)}<br />
                                                party: {pres.party}
                                            <hr />
                                            <p>
                                                <a href="/play" className="btn btn-info">return to portal</a>
                                            </p>
                                            <p>
                                                <a href="/play" data={pres._id} className="btn btn-info">my president</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container >
        )
    }
}