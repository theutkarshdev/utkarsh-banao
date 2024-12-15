"use client";
import React, { useState, useEffect } from "react";
import SignJoin from "./SignJoin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {

    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const popupTimeout = setTimeout(() => {
            setPopup(true);
        }, 2000);

        return () => clearTimeout(popupTimeout);
    }, []);

    const removePopup = () => {
        setPopup(false);
    };

    return (
        <>
            {popup && <div className="popup-container">

                <div className="popup">
                    <FontAwesomeIcon onClick={removePopup} className="icon-remove" icon={faXmark} />
                    <SignJoin />
                </div>
            </div>}
        </>
    )
}
export default Popup;