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


                    <div className="row my-4">
                        <div className="col-sm-12 bd-example">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>

                                <div className="carousel-inner">

                                    {/* <div className="col-sm-12 p-2">
                                        {this.state.presidents.map((pres, index) => (
                                            <div key={index} className="card bg-light m-1 mt-4">
                                                <h6 className="card-header" onClick={() => this.handleFormSubmit(pres._id)}>{pres.number} - {pres.president}</h6>
                                                <div className="card-body">
                                                    <h6 className="card-text">{pres.took_office} - {pres.left_office}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div> */}
                                    
                                    <div className="carousel-item active">
                                        <img src="./images/pres/warren-g-harding.png" className="d-block w-100" alt="POTUS"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="./images/pres/abraham-lincoln.png" className="d-block w-100" alt="POTUS"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="./images/pres/woodrow-wilson.png" className="d-block w-100" alt="POTUS"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>

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
                    </div>


                    {/* <div className="row">
                        <div className="col-sm-12">
                            <div className="card bg-light m-1 mt-4">
                                <h5 className="card-header">1</h5>
                                <div className="card-body">
                                    <p className="card-text">2</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pl-4 mt-2">
                                <h5>The Presidents of the United States of America</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 p-2">
                            {this.state.presidents.map((pres, index) => (
                                <div key={index} className="card bg-light m-1 mt-4">
                                    <h6 className="card-header" onClick={() => this.handleFormSubmit(pres._id)}>{pres.number} - {pres.president}</h6>
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