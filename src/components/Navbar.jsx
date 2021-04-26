import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-nord1 ">
            <div className="container-fluid">
                <a className="navbar-brand text-nord4 main-text-code mo-4" href="#">DropDev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-nord4 main-page-text" aria-current="page" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-nord4 main-page-text" href="#Skills">Talents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-nord4 main-page-text" href="#Contact">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text text-nord4 main-page-text">
                        Do More.
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;