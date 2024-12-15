import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLocationDot, faBagShopping, faCalendarCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddNew = () => {



    return (
        <>
            <div className="addnew">
                <div className="container ">
                    <div className="addnew-head">
                        <FontAwesomeIcon className="plus-icon" icon={faCirclePlus} /><h3>Add Your Listing</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content1 mt-4">
                                <div className="head"><FontAwesomeIcon className="people-icon" icon={faUsers} /><h3>People</h3></div>
                                <p>An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content2 mt-4">
                                <div className="head"><FontAwesomeIcon className="locaion-icon" icon={faLocationDot} /><h3>Place</h3></div>
                                <p>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content3 mt-4">
                                <div className="head"><FontAwesomeIcon className="bag-icon" icon={faBagShopping} /><h3>Product</h3></div>
                                <p>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content4 mt-4">
                                <div className="head"><FontAwesomeIcon className="check-icon" icon={faCalendarCheck} /><h3>Program</h3></div>
                                <p>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNew;