import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-nord1">
            <div className="container">
                <a className="navbar-brand" href="/Homepage">
                    <p className="main-page-text text-nord4">DROPDEADS</p>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;