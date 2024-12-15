"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Facebook2 from "./images/facebook2.png";
import Google2 from "./images/google2.png";
import Image from 'next/image';

const SignJoin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [join, setJoin] = useState(true);
    // const [sign, setSign] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    const joinIn = () => {
        setJoin(!join);
    }
    const signIn = () => {
        setJoin(!join);
    }
    return (
        <>
            {join ? <div className='signJoin-container'>
                <div className='d-flex mb-4 sm-center'>
                    <h4 className='active'>Sign In</h4>
                    <h4 onClick={joinIn}>Join In</h4>
                </div>

                <div className='sm-none'>
                    <button><Image width="200" height="200" src={Google2} alt="" /> Continue with Google</button>
                    <button><Image width="200" height="200" src={Facebook2} alt="" /> Continue with Facebook</button>
                </div>

                <div className="form lg-none">
                    <input type="email" placeholder='Email' />
                    <div className="password-container">
                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' />
                        <FontAwesomeIcon className='eye-icon' onClick={togglePasswordVisibility} icon={passwordVisible ? faEye : faEyeSlash} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <input className="checkbox" type="checkbox" value="" />
                            <label>Remember me</label>
                        </div>
                        {/* <div> */}
                        <p className='forgot'><FontAwesomeIcon className='lock' icon={faLock} />Forgot Password?</p>
                        {/* </div> */}
                    </div>
                    <button type='submit' className='btn-submit'>Continue</button>
                </div>
                <div className='boder'></div>
                <p className='ocw'>Or connect with</p>
                <div className='lg-none'>
                    <button><Image width="200" height="200" src={Google2} alt="" /> Continue with Google</button>
                    <button><Image width="200" height="200" src={Facebook2} alt="" /> Continue with Facebook</button>
                </div>
                <div className="form sm-none">
                    <input type="email" placeholder='Email' />
                    <div className="password-container">
                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' />
                        <FontAwesomeIcon className='eye-icon' onClick={togglePasswordVisibility} icon={passwordVisible ? faEye : faEyeSlash} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <input className="checkbox" type="checkbox" value="" />
                            <label>Remember me</label>
                        </div>
                        {/* <div> */}
                        <p className='forgot'><FontAwesomeIcon className='lock' icon={faLock} />Forgot Password?</p>
                        {/* </div> */}
                    </div>
                    <button type='submit' className='btn-submit'>Continue</button>
                </div>
            </div>
                :
                <div className='signJoin-container'>
                    <div className='d-flex mb-4 sm-center'>
                        <h4 onClick={signIn}>Sign In</h4>
                        <h4 className='active'>Join In</h4>
                    </div>

                    <div className='sm-none'>
                        <button><Image width="200" height="200" src={Google2} alt="" /> Continue with Google</button>
                        <button><Image width="200" height="200" src={Facebook2} alt="" /> Continue with Facebook</button>
                    </div>
                    <div className="form lg-none">
                        <input type="email" placeholder='Email' />
                        <div className="password-container">
                            <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' />
                            <FontAwesomeIcon className='eye-icon' onClick={togglePasswordVisibility} icon={passwordVisible ? faEye : faEyeSlash} />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='wb-container'>
                                <div className='white-border'></div>
                                <div className='white-border'></div>
                                <div className='white-border'></div>
                            </div>
                            <p className='p-i'>Password Strength</p>
                        </div>
                        <p className='terms-policy-text'>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>

                        <button type='submit' className='btn-submit'>Continue</button>
                    </div>
                    <div className='boder'></div>
                    <p className='ocw'>Or connect with</p>
                    <div className='lg-none'>
                        <button><Image width="200" height="200" src={Google2} alt="" /> Continue with Google</button>
                        <button><Image width="200" height="200" src={Facebook2} alt="" /> Continue with Facebook</button>
                    </div>
                    <div className="form sm-none">
                        <input type="email" placeholder='Email' />
                        <div className="password-container">
                            <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' />
                            <FontAwesomeIcon className='eye-icon' onClick={togglePasswordVisibility} icon={passwordVisible ? faEye : faEyeSlash} />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='wb-container'>
                                <div className='white-border'></div>
                                <div className='white-border'></div>
                                <div className='white-border'></div>
                            </div>
                            <p className='p-i'>Password Strength</p>
                        </div>
                        <p className='terms-policy-text'>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>

                        <button type='submit' className='btn-submit'>Continue</button>
                    </div>
                </div>}

        </>
    )
}

export default SignJoin;
