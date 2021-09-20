import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from '../content/Contact';
import Feature from '../content/Feature';
import Home from '../content/Home';
import Project from '../content/Project';
import { authenticationService } from '../content/Auth/service/auth-service'

const Nav = () => {

    return <div>
        <Router>


            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><i className='uil uil-user'></i> {authenticationService.currentUserValue.name}</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><span data-hover="About">About</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link"><span data-hover="Projects">Projects</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/features" className="nav-link"><span data-hover="Resume">Resume</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link"><span data-hover="Contact">Contact</span></Link>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:;" className="nav-link"><span data-hover="Logout" onClick={authenticationService.logout}>Logout</span></a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-lg-auto">
                            <div className="ml-lg-4">
                                <div className="color-mode d-lg-flex justify-content-center align-items-center">
                                    <i className="color-mode-icon"></i>
                                    Color mode
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Project />
                </Route>
                <Route path="/features">
                    <Feature />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
}
export default Nav;