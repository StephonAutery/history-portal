import React from "react";
import Navbar from "../layout/navbar.component";
import Container from "../container.component";
import API from "../../utils/API";
import { Component } from 'react';
import Footer from "../layout/footer.component";

export default class PresInfo extends Component {
    state = {
        president: {}
    }

    componentDidMount() {
        API.getPresByID(this.props.history.location.state.pres)
            .then(res => {
                this.setState({
                    president: res.data.pres
                });
            });
    }

    getPres(pres) {
        if (pres) {
            let urlString = "./images/pres/"
            let splitString = urlString.concat(((pres.replace(/ /g, "-")).toLowerCase()).concat('.png'));
            return splitString;
        }
    }

    render() {
        return (
            <Container>

                <Navbar />
                <div className="container w-75">

                    <div className="jumbotron m-3">
                        <h3 className="lead">{this.state.president.number} - {this.state.president.president}</h3>
                        <hr className="my-4" />
                        <img src={this.getPres(this.state.president.president)} alt="presidents" width="320px"></img>
                        <hr className="my-4" />
                        <p className="lead">The Presidents of the United States of America</p>
                        <hr className="my-4" />
                        <h5 className="card-text lead">birth year :  {this.state.president.birth_year}</h5>
                        <h5 className="card-text lead">took office :  {this.state.president.took_office}</h5>
                        <h5 className="card-text lead">left office :  {this.state.president.left_office}</h5>
                        <h5 className="card-text lead">death year :  {this.state.president.death_year}</h5>
                        <h5 className="card-text lead">party :  {this.state.president.party}</h5>
                    </div>

                </div>
                <Footer />

            </Container>
        );
    }
}