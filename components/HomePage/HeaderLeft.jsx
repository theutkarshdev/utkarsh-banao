import React from "react";
import HeaderImg from "../images/header-img.png";
import Image from "next/image";

const HeaderLeft = () => {
    return (
        <>

            <div className="header-left">
                <h1>Explore your <span className="hobby">hobby</span> or <span className="passion">passion</span></h1>
                <div className="sm-none">
                    <p>Sign-in to interact  with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshop and places to practice participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...</p>
                    <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hope on your hobbyhorse and enjoy the ride.</p>
                </div>

                <div className="lg-none">
                    <p>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
                    </p>
                </div>
                <Image width={900} height={250} src={HeaderImg} className="sm-none" alt="" />
            </div>


        </>
    )
}

export default HeaderLeft;