"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCompass, faStar, faBookmark, faBell, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
    const [searchContainer, setSearchContainer] = useState(false);

    const hadleSearchContainer = () => {
        setSearchContainer(!searchContainer);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
                <div className="container-fluid">
                    <Link href='/' className="navbar-brand">
                        <div className="logo">
                            h
                        </div>
                        <div className="logo-text">
                            <h2> hobby<span>cue</span></h2>
                            <h4>Your Hobby, Your Community</h4>
                        </div>
                    </Link>
                    <div className="nav-small-icon lg-none">
                        <FontAwesomeIcon className="icon" onClick={hadleSearchContainer} icon={searchContainer ? faXmark : faMagnifyingGlass} />
                        <FontAwesomeIcon className="icon" icon={faBell} />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div className="sm-none">
                            <form className="d-flex justify-content-center align-items-center " role="search">
                                <input type="search" placeholder="Search Here..." className="search-input" />
                                <button className="btn-search " type="submit">
                                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                                </button>
                            </form>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FontAwesomeIcon className="icon" icon={faCompass} /> Explore
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            People - Community
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Places - Venues
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Programs - Events
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Products - Store
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Blogs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FontAwesomeIcon className="icon" icon={faStar} /> Hobbies
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <div className="nav-icons">
                                <li className="nav-item">
                                    <a href="">
                                        <FontAwesomeIcon className="icon" icon={faBookmark} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <FontAwesomeIcon className="icon sm-none" icon={faBell} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <FontAwesomeIcon className="icon" icon={faCartShopping} />
                                    </a>
                                </li>

                            </div>
                            <li className="nav-item mt-1">
                                <button>Sign In</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {searchContainer && <div className="lg-none sm-search-container">
                <form className="d-flex justify-content-center align-items-center " role="search">
                    <input type="search" placeholder="Search Here..." className="search-input" />
                    <button className="btn-search " type="submit">
                        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                    </button>
                </form>
            </div>}




        </>
    )
}

export default Navbar;