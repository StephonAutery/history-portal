import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";
import "../../utils/button.css";

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

    carousel(index, pres) {
        let urlString = "./images/pres/"
        let splitString = urlString.concat(((pres.president.replace(/ /g, "-")).toLowerCase()).concat('.png'));
        if (index === 0) {
            return (
                <div className="carousel-item active" key={index}>
                    <img src={splitString} className="d-block w-100" alt="POTUS"></img>
                    <div className="carousel-caption d-none d-md-block bg-dark">
                        <h5>{pres.number} - {pres.president}</h5>
                        <p>{pres.took_office} - {pres.left_office}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="carousel-item" key={index}>
                    <img src={splitString} className="d-block w-100" alt="POTUS"></img>
                    <div className="carousel-caption d-none d-md-block bg-dark">
                        <h5>{pres.number} - {pres.president}</h5>
                        <p>{pres.took_office} - {pres.left_office}</p>
                    </div>
                </div>
            );
        }
    }

    slideInfo(index, pres) {
        if (index === 0) {
            return (
                <li data-target="#carouselExampleCaptions" data-slide-to={index} className="active" key={index}></li>
            )
        } else {
            return (
                <li data-target="#carouselExampleCaptions" data-slide-to={index} key={index}></li>
            )
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to next page
                pathname: this.state.redirect,
                state: {
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
                            <div className="pl-0 mt-4 mb-2">
                                <h5>The Presidents of the United States of America</h5>
                                <hr className="pl-0" />
                            </div>
                        </div>
                    </div>


                    {/* <div className="row my-4 bg-secondary border border-dark">
                        <div className="col-sm-12 bd-example">



                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    {this.state.presidents.map((pres, index) => (
                                        this.slideInfo(index, pres)
                                    ))}
                                </ol>
                                <div className="carousel-inner">
                                    {this.state.presidents.map((pres, index) => (
                                        this.carousel(index, pres)
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>



                        </div>
                    </div> */}

                    <div>
                        <div className="col-sm-12">
                            {
                            this.state.presidents.map((pres, index) => (
                                <div key={index} className="card bg-light m-1 mt-4">
                                    <h6 className="card-header ml-4 mt-2 text-primary link-button" onClick={() => this.handleFormSubmit(pres._id)}>{pres.number} - {pres.president}</h6>
                                    <div className="card-body">
                                        <h6 className="card-text">{pres.took_office} - {pres.left_office}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <Footer />
            </Container >
        )
    }
}