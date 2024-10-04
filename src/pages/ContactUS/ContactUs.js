import React, { useState, useEffect,useRef } from 'react'
import './ContactUs.css'
import { FirebaseIcon, GoogleCloudIcon, InstaIcon, LinkedInIcon, TelegramIcon, TenserFlowIcon, TwitterIcon, angularIcon, gitbashIcon, mongoIcon, nextjslIcon, reactIcon } from '../../logos'
import MainImg from "../../assets/image/drawing-white64x64.png"
import emailjs from 'emailjs-com';
import {  toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

 const ContactUs = () => {

    const[disableSubmitButton,setDisableSubmitButton]=useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null); // State to store reCAPTCHA token
 // Use ref to access reCAPTCHA instance
 const recaptchaRef = useRef(null);

     // State for the form fields
     const [formData, setFormData] = useState({
        email: '',
        contactNo: '',
        message: ''
    });
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

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle reCAPTCHA change
    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Save the token when reCAPTCHA is solved
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
         // Ensure reCAPTCHA is validated before sending email
         if (!recaptchaToken) {
            toast.error(
                <>
                    <strong>Error! </strong> 🚫<br />
                    Please complete the reCAPTCHA verification.
                </>, 
                {
                    icon: '⚠️',
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
            return;
        }
        setDisableSubmitButton(true)
        console.log(formData);

        // Send form data to your email
        await sendEmail(formData);
    };

     // Example using EmailJS to send email
     const sendEmail = async (formData) => {
        emailjs.send(
            'service_wpfn59b',          // Replace with your service ID
            'template_o5353ub',         // Replace with your template ID
            {
                email: formData.email,
                contactNo: formData.contactNo,
                message: formData.message,
            },
            'pW1idjyknFog70ELz'               // Replace with your user ID
        ).then((response) => {
            toast.success(
                <>
                    <strong>Success! </strong> 🎉<br />
                    Thank you for contacting us. We’ll get back to you soon.
                </>, 
                {
                    icon: '✅',
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
            resetForm();
            setDisableSubmitButton(false);
            setRecaptchaToken();
            recaptchaRef.current.reset(); // Reset the reCAPTCHA
            console.log('SUCCESS!', response.status, response.text);
        }).catch((error) => {
            toast.error(
                <>
                    <strong>Error! </strong> 🚫<br />
                    Please try again later. We’re facing some issues.
                </>, 
                {
                    icon: '⚠️',
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
            setDisableSubmitButton(false);
            setRecaptchaToken();
            recaptchaRef.current.reset(); // Reset the reCAPTCHA
            console.log('FAILED...', error);
        });
    };


    // Function to reset form
    const resetForm = () => {
        setFormData({
            email: '',
            contactNo: '',
            message: ''
        });
    };
    
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
                                    <img src={MainImg} type="image/webp" alt='my-photo'/>
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
                                    <form onSubmit={handleSubmit}>

                                        <div className='field'>
                                            <input
                                              type='email' 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required />
                                            <label>Email</label>
                                        </div>
                                        <div className='field'>
                                            <input name='contactNo' 
                                                    type='text'
                                                    value={formData.contactNo}
                                                    onChange={handleChange}
                                                    required/>
                                            <label>Contact No.</label>
                                        </div>
                                        <div className='field'>
                                            <textarea name="message" 
                                                    rows="4" 
                                                    cols="50"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required >
                                            </textarea>
                                            <label>Message</label>
                                        </div>
                                        <div className='field'>
                                        <ReCAPTCHA
                    sitekey="6LdTelcqAAAAAFT9TFoQCeoDKdVIYNHyGXq-iZL5" // Replace with your reCAPTCHA site key
                    onChange={handleRecaptchaChange}
                    ref={recaptchaRef}
                />
                </div>
                                        <div className='contacts-btn'>
                                            <button disabled={disableSubmitButton} type='submit'>
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
                                        </form>
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