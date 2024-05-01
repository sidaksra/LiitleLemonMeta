import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {HashLink} from 'react-router-hash-link';
import ReactPlayer from 'react-player';
import backgroundVideo from '../images/resvideo.mp4';


const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <section className="header">
            {/* Importing Nav */}
            <Nav />
            <div className="home-content">
                <div className="video-background">
                    <ReactPlayer
                        url={backgroundVideo}
                        playing
                        loop
                        muted
                        controls={false} // Set controls to false to remove default controls
                        width="100%"
                        height="100%"
                        playsinline // Ensures video plays inline on mobile browsers
                        config={{
                            file: {
                                attributes: {
                                    controlsList: 'nodownload' // Removes download button on iOS
                                }
                            }
                        }}
                    />
                </div>
                <Link to="/book" target="_blank" className="button-52">Book Now</Link>
                <div className='open-hour'>
                          <h3>Opening Hours</h3>
                            <div>
                              <span>Monday - Friday: 11:00 AM - 10:00 PM</span>
                            </div>
                            <div>
                              <span>Saturday - Sunday: 10:00 AM - 11:00 PM</span>
                            </div>
                          </div>
                  <div></div>
            </div>
        </section>
    );
}

export default Header;