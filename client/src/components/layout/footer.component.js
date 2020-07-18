import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <div className="container w-75 mt-4 mb-4">

                <nav className="nav flex-column m-0 p-0 bg-dark">
                    <a className="nav-link" href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer"><h5>ACLU</h5>American Civil Liberties Union</a>
                    <a className="nav-link" href="https://www.splcenter.org/" target="_blank" rel="noopener noreferrer"><h5>SPLC</h5>Southern Poverty Law Center</a>
                    <a className="nav-link" href="https://now.org/" target="_blank" rel="noopener noreferrer"><h5>NOW</h5>National Origanization for Women</a>
                    <a className="nav-link" href="https://www.naacp.org/" target="_blank" rel="noopener noreferrer"><h5>NAACP</h5>National Association for the Advancement of Colored People</a>
                    <a className="nav-link" href="https://www.adl.org/" target="_blank" rel="noopener noreferrer"><h5>ADL</h5>The Anti-Defamation League</a>
                </nav>
            </div>

        )
    }
}