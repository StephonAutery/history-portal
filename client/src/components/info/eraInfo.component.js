import React, { Component } from 'react';
import Navbar from "../layout/navbar.component";
import Footer from "../layout/footer.component";
import Container from "../container.component";
import API from '../../utils/API';

export default class Era extends Component {
    state = {
        era: [],
        linkData: []
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
                    era: res.data.era,
                    linkData: res.data.era.links
                });
            });

        // API.getEra()
        //     .then(res => {
        //         this.setState({
        //             eras: res.data
        //         });
        //     });
    }
    // 
    render() {
        return (
            <Container>
                <Navbar />
                <div className="container w-75">
                    <div className="card m-4">
                        <h5 className="card-header">{this.state.era.era}</h5>
                        <div className="card-body">
                            <p className="card-text">{this.state.era.start} - {this.state.era.end}</p>
                            <p className="card-text">{this.state.era.description}</p>
                            {this.state.linkData.map((link, index) => (
                                <p key={index} className="mb-0"><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></p>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <Footer />
            </Container>
        );
    }
}