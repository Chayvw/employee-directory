import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" >Random Users</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li> */}
                    <li className="nav-item">
                        <Link to="/Gender" className="nav-link" >Email</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Gender" className="nav-link" >Gender</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Location" className="nav-link" >Location</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;