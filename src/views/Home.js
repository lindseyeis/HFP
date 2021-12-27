import React from "react";
import "../styles/App.css";
import fblogo from "../images/fblogo.svg";
import hfplogo from "../images/doglogo.png";
import hfpdog1 from "../images/hfpdog1.png";
import hfpdog2 from "../images/hfpdog2.png";
import hfpdog3 from "../images/hfpdog3.png";
import petfinderlogo from "../images/petfinderLogoBlack.png";
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import HFPMenu from "../ui/HFPMenu";

function Home() {
    return (
        <div className="Home">
            <div className="Header">
                <div className="SocialLinks">
                    <a
                        className="FacebookLink"
                        href="https://www.facebook.com/heaven4pawz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fblogo} className="SocialLogo" alt="logo" />
                    </a>
                    <a
                        className="PetfinderLink"
                        href="https://www.petfinder.com/member/us/wa/kirkland/heaven-4-paws-wa554/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={petfinderlogo} className="SocialLogo" alt="logo" />
                    </a>
                </div>
                {/* <ul className="Menu">
                    <li className="MenuItem">About Us</li>
                    <li className="MenuItem">Adopt</li>
                    <img src={hfplogo} className="MenuItem hfpLogo" alt="logo" />
                    <li className="MenuItem">Donate</li>
                    <li className="MenuItem">Contact Us</li>
                </ul> */}
                <HFPMenu />
                <div className="rowofdogs">
                    <div className="hfpdogs">
                        <img className="hfp-dog" src={hfpdog1} alt="Dog" />
                    </div>
                    <div className="hfpdogs">
                        <img className="hfp-dog" src={hfpdog2} alt="Dog" />
                    </div>
                    <div className="hfpdogs">
                        <img className="hfp-dog" src={hfpdog3} alt="Dog" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;