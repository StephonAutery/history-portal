import React, { Component } from 'react';
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";
import Container from "../container.component";
import API from '../../utils/API';


export default class Era extends Component {
    state = {
        era: []
    }

    componentDidMount() {
        if (!localStorage.getItem('loginData')) {
            this.setState({
                redirect: "landing",
            })
        }


        API.getEraById(this.props.location.state.eraId)
            .then(res => {
                this.setState({
                    era: res.data
                });
            });

        // API.getEra()
        //     .then(res => {
        //         this.setState({
        //             eras: res.data
        //         });
        //     });
    }

    render() {
        console.log(this.props.location.state.eraId);
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                    <p className="m-2 p-2">lets begin here ...</p>
                    {/* {props.links.map((link, index) => (
                <p key={index} className="mb-0"><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></p>
            ))} */}
                </div>
                <Footer />
            </Container>
        );
    }
}