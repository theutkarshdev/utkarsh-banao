import React from "react";
import Img from "../images/hobby.png";
import Image from "next/image";
const HobbyCommunity = () => {
    return (
        <>
            <div className="container-fluid hobby-community">
                <div className="container">
                    <h1>Your <span className="hobby">hobby</span>, Your <span className="comm">Community...</span></h1>
                    <button>Get Started</button>
                    <Image width="1700" height="300" src={Img} alt="hobbyImg" className="w-100 h-auto" />
                </div>
            </div>
        </>
    )
}

export default HobbyCommunity;