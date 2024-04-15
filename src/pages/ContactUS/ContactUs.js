import React, { useState, useEffect } from 'react'
import './ContactUs.css'
import { FirebaseIcon, GoogleCloudIcon, InstaIcon, LinkedInIcon, TelegramIcon, TenserFlowIcon, TwitterIcon, angularIcon, gitbashIcon, mongoIcon, nextjslIcon, reactIcon } from '../../logos'
import MainImg from "../../assets/image/myPhoto.png"

 const ContactUs = () => {
    // State to hold the icon size
    const [iconSize, setIconSize] = useState({ width: '35px', height: '35px' });

    useEffect(() => {
        // Function to update state based on viewport width
        const handleResize = () => {
            if (window.innerWidth <= 390) {
                setIconSize({ width: '30px', height: '30px' });
            } else {
                setIconSize({ width: '35px', height: '35px' });
            }
        };

        // Add event listener on mount
        window.addEventListener('resize', handleResize);

        // Call handleResize immediately in case the initial width is <= 390px
        handleResize();

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section className='contacts-section c-pd-3'>
            <div className='container'>
                <div className='contacts-wraper'>
                    <div className='contacts-image-wrapper'>
                        <div className='image-wrapper'>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {TenserFlowIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {nextjslIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {mongoIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {angularIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {FirebaseIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {gitbashIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {GoogleCloudIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='icon-wrapper'>
                                <div className='icon'>
                                    {reactIcon(iconSize.width, iconSize.height)}
                                </div>
                            </div>
                            <div className='main-image'>
                                <div className='main-image-wrapper'>
                                    <img src={MainImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contacts-form'>
                        <div className="card">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="card-inner">
                                <div className='form-wrapper'>
                                    <div className='form-title'>
                                        <h1>contact us</h1>
                                    </div>
                                    <div className='social-media'>
                                        <ul>
                                            <li>
                                                <div className='media-icon'>{LinkedInIcon('30px', '30px')}</div>
                                            </li>
                                            <li>
                                                <div className='media-icon'>{InstaIcon('30px', '30px')}</div>
                                            </li>
                                            <li>
                                                <div className='media-icon'>{TelegramIcon('30px', '30px')}</div>
                                            </li>
                                            <li>
                                                <div className='media-icon'>{TwitterIcon('30px', '30px')}</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='form-main'>
                                        <div className='field'>
                                            <input type='text' />
                                            <label>Email</label>
                                        </div>
                                        <div className='field'>
                                            <input name='' type='text' />
                                            <label>Contact No.</label>
                                        </div>
                                        <div className='field'>
                                            <textarea rows="4" cols="50" >
                                            </textarea>
                                            <label>Message</label>
                                        </div>
                                        <div className='contacts-btn'>
                                            <button >
                                                <div class="svg-wrapper-1">
                                                    <div class="svg-wrapper">
                                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span>Send</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;