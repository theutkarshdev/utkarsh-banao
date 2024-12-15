import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLocationDot, faBagShopping, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Explore = () => {
    return (
        <>
            <div className="container explore">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="content mt-4">
                            <div className="head"><FontAwesomeIcon className="people-icon" icon={faUsers} /><h3>People</h3></div>
                            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                            <button>Connect</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="content mt-4">
                            <div className="head"><FontAwesomeIcon className="locaion-icon" icon={faLocationDot} /><h3>Place</h3></div>
                            <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                            <button>Meet up</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="content mt-4">
                            <div className="head"><FontAwesomeIcon className="bag-icon" icon={faBagShopping} /><h3>Product</h3></div>
                            <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                            <button>Get it</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="content mt-4">
                            <div className="head"><FontAwesomeIcon className="check-icon" icon={faCalendarCheck} /><h3>Program</h3></div>
                            <p>Find events, meetups and workshops related to your hobby,
                                discover engaging hobby events. Register or buy tickets online.</p>
                            <button>Attend</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;