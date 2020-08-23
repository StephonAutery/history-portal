import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import Container from "../container.component";
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";
import "../../utils/button.css";

export default class Play extends Component {
    state = {
        redirect: "",
        user: "",
        eras: [],
        eraId: ""
    }
    constructor(props) {
        super(props);
        this.playStephon = this.playStephon.bind(this);
        this.playSue = this.playSue.bind(this);
        this.playPres = this.playPres.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('loginData')) {
            this.setState({
                redirect: "landing",
            })
        }

        // API.getUserById(this.props.location.state.id.userid)
        //     .then(res => {
        //         this.setState({
        //             user: res.data.user
        //         });
        //     });

        API.getEra()
            .then(res => {
                this.setState({
                    eras: res.data
                });
            });
    }

    playStephon(event) {
        event.preventDefault();
        this.setState({
            redirect: "questions"
        });
    }

    playSue(event) {
        event.preventDefault();
        this.setState({
            redirect: "sueQuestions"
        });
    }

    playPres(event) {
        event.preventDefault();
        this.setState({
            redirect: "presidents"
        });
    }

    getEra(era) {
        this.setState({
            eraId: era,
            redirect: "era"
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: JSON.parse(localStorage.getItem('loginData')),
                    eraId: this.state.eraId
                }
            }} />
        }
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                    <div className="row m-1">
                        <div className="col-sm-12 mb-2 mt-2">
                            <div className="card mt-2">
                                <h5 className="card-header">Eras of the United Sates of America</h5>
                                <div className="card-body">
                                    <div className="card-text">
                                        {this.state.eras.map((era, index) => (
                                            <div key={index} className="m-3">
                                                <span onClick={() => this.getEra(era._id)} className="link-button text-primary"> {era.era} </span><br />{era.start} - {era.end}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <Footer />
            </Container >
        )
    }
}