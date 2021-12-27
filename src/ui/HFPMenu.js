import React from "react";
import "../styles/App.css";
import hfplogo from "../images/doglogo.png";
import { Link } from "react-router-dom";

function HFPMenu() {
    return (
        <div className="menu-container">
            <Link to="/aboutus" className="menu-item">
                About Us
                    </Link>
            <Link to="/adopt" className="menu-item">
                Adopt
                    </Link>
            <Link to="/" className="menu-item">
                <img src={hfplogo} className="menu-logo" alt="logo" />
            </Link>
            <Link to="/donate" className="menu-item">
                Donate
                    </Link>
            <Link to="/contactus" className="menu-item">
                Contact Us
                    </Link>
        </div>
    );
}

export default HFPMenu;