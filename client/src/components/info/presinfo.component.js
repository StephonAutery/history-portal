import React from "react";
import Navbar from "../layout/navbar.component";
import Container from "../container.component";
import API from "../../utils/API";
import { Component } from 'react';

export default class PresInfo extends Component {
    // function PresInfo(props) {
    state = {
        president: {}
    }

    componentDidMount() {
        API.getPresByID(this.props.history.location.state.pres)
            .then(res => {
                this.setState({
                    president: res.data.pres
                })
                console.log(this.state.president)
            });
    }

    render() {
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                    <div className="row p-2 m-2">
                        <div className="col-sm-12">
                            <div className="card bg-light m-1 mt-4">
                                <h5 className="card-header">{this.state.president.number} - {this.state.president.president} </h5>
                                <div className="card-body">
                                    <h5 className="card-text">birth year :  {this.state.president.birth_year}</h5>
                                    <h5 className="card-text">took office :  {this.state.president.took_office}</h5>
                                    <h5 className="card-text">left office :  {this.state.president.left_office}</h5>  
                                    <h5 className="card-text">death year :  {this.state.president.death_year}</h5>   
                                    <h5 className="card-text">party :  {this.state.president.party}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}