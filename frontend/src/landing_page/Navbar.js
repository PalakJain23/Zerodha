import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
                <div className="container">

                    {/* LOGO */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="media/images/logo.svg" style={{ width: "135px" }} alt="logo" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Right Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center gap-4">

                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>

                            {/* Three-line menu icon */}
                            <li className="nav-item">
                                <i className="fa fa-bars fs-4" style={{ cursor: "pointer" }}></i>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
