"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCirclePlay, faCirclePause, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../images/testimonial.png'
import Image from 'next/image';

const Testimonial = () => {
    const [isPlaying, setPlaying] = useState(false);
    const [isSound, setSound] = useState(false);

    const handlePlayPauseClick = () => {
        setPlaying((prevIsPlaying) => !prevIsPlaying);
    };
    const handleMicOnOff = () => {
        setSound((prevIsSound) => !prevIsSound);
    }
    return (
        <>
            <div className="container">
                <div className="testimonial">
                    <div className="col-12">
                        <div className="content">
                            <div className="head"><FontAwesomeIcon className="quote" icon={faQuoteLeft} /><h3>Testimonial</h3></div>
                            <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>

                        </div>
                        <div className='row audio-container'>
                            <div className='left'>
                                <div className="audio-player">
                                    <FontAwesomeIcon className='p-icon' icon={isPlaying ? faCirclePause : faCirclePlay}
                                        onClick={handlePlayPauseClick} />
                                    <div className="progress-bar">
                                        <div className="circle"></div>
                                        <progress value='0' max="100"></progress>
                                    </div>
                                    <div className="img">
                                        <button className='mic-container'>
                                            <FontAwesomeIcon className='icon-mic'
                                                icon={isSound ? faMicrophoneSlash : faMicrophone}
                                                onClick={handleMicOnOff} />
                                        </button>
                                        <Image width="50" height="50" src={Avatar} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className='right-content'>
                                    <Image width="100" height="100" src={Avatar} alt="" />
                                    <div className="text">
                                        <div className="name">Shubha Nagarajan</div>
                                        <div className="degi">Classical Dancer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
