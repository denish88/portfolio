import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion"
// import SectionOneImg from '../../assets/image/section_1_img.svg'
import SectionTwoImg from '../../assets/image/section_2_img.svg'
import SectionThreeImg from '../../assets/image/section_3_img.svg'
import SectionFourImg from '../../assets/image/section_4_img.svg'
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import {
    AWSIcon,
    DockerIcon,
    FirebaseIcon,
    GitHubIcon,
    GoogleCloudIcon,
    HerokuIcon,
    InstaIcon,
    KerasIcon,
    LinkedInIcon,
    NPMIcon,
    PowerIcon,
    PytourchIcon,
    TenserFlowIcon,
    angularIcon,
    cssIcon,
    expressIcon,
    gitbashIcon,
    graphqlIcon,
    htmlIcon,
    jsIcon,
    mongoIcon,
    nextjslIcon,
    nodeIcon,
    reactIcon,
    sqlIcon,
    test,
    vueIcon
} from '../../logos';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useAnimationContext } from '../../context/AnimationContext'
import './Home.css'
import '../../assets/cssanimation/animation.css'


const Home = () => {

    const { isLandingAnimationComplete } = useAnimationContext();
    const [animateSections, setAnimateSections] = useState(false);


    // Refs for each section
    const refSection1 = useRef(null);
    const refSection2 = useRef(null);
    const refSection3 = useRef(null);
    const refSection4 = useRef(null);

    // InView states for each section
    const inViewSection1 = useInView(refSection1, { once: true });
    const inViewSection2 = useInView(refSection2, { once: true });
    const inViewSection3 = useInView(refSection3, { once: true });
    const inViewSection4 = useInView(refSection4, { once: true });



    useEffect(() => {
        if (isLandingAnimationComplete) {
            const timeoutId = setTimeout(() => {
                setAnimateSections(true);
            }, 0);

            return () => clearTimeout(timeoutId);
        }
    }, [isLandingAnimationComplete]);



    // Controls for each section
    const controlsSection1 = useScrollAnimation(inViewSection1);
    const controlsSection2 = useScrollAnimation(inViewSection2);
    const controlsSection3 = useScrollAnimation(inViewSection3);
    const controlsSection4 = useScrollAnimation(inViewSection4);


    return (
        <>

            <section className='main-banner c-pd-3'>
                <div className='container'>
                    <div className='banner-wrapper'>
                        <motion.div className='banner-conatent' ref={refSection1} initial="hidden"
                            animate={controlsSection1} variants={slideInFromLeft(animateSections ? 0.5 : 3.5)}>
                            <div className='banner-conatent-wrapper'>
                                <div className='section-heading'>
                                <h1>Hey there,</h1>
                                </div>
                                <div className='para-rtl'>
                                 <p>I'm <span>Denish Savaliya,</span> a driven Full Stack JavaScript Developer, committed to crafting cutting-edge, scalable web solutions that push the limits of innovation.</p> <p>I thrive on solving complex challenges and staying at the forefront of web technologies,</p> <p>constantly pushing the envelope and embracing lifelong learning.</p>
                                </div>
                                <div className='social-icon'>
                                    <ul>
                                        <li>{LinkedInIcon()}</li>
                                        <li>{InstaIcon()}</li>
                                        <li>{NPMIcon()}</li>
                                        <li>{GitHubIcon()}</li>
                                    </ul>
                                </div>
                                <div className='banner-button'>
                                    <PrimaryButton classname="primary-btn" text="Contact Me" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className='banner-image' ref={refSection1} initial="hidden"
                            animate={controlsSection1} variants={slideInFromRight(animateSections ? 0.5 : 3.5)}>
                            {/* <img src={SectionOneImg} alt='developer image' /> */}
                            {test()}
                        </motion.div>
                    </div>
                </div>
            </section >


            <section className='what-i-do-section c-pd-3'>
                <div className='container'>
                    <div className='section-heading '>
                        <h2 className='h1'>Here's</h2>
                        <div className='ad-font'>what i do</div>
                    </div>
                    <div className='two-colum-wrapper md-column'>

                        <motion.div className='left-pt w-40 two-colum-image-wrapper' ref={refSection2} initial="hidden"
                            animate={controlsSection2} variants={slideInFromLeft(animateSections ? 0.5 : 3)} >
                            <img src={SectionTwoImg} alt='work image' />
                        </motion.div>

                        <motion.div className='two-colum-content' ref={refSection2} initial="hidden"
                            animate={controlsSection2} variants={slideInFromRight(animateSections ? 0.5 : 3)}>
                            <div className='sub-heaidng'>
                                <h3 className='h2'>Full stack development</h3>
                            </div>
                            <div className='code-icon-wrapper'>
                                <ul>
                                    <li>
                                        <span className='code-icon'>{htmlIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{cssIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{jsIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{reactIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{nodeIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{angularIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{expressIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{mongoIcon("40px", "40px")}</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className='code-icon'>{sqlIcon("50px", "50px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{graphqlIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{nextjslIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{vueIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{gitbashIcon("40px", "40px")}</span>
                                    </li>
                                </ul>
                                <ul className='para-rtl'>

                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Bulding responsive website front-end using ReactJS,AngularJs,NextJS,VueJS</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Backend development using NodeJS,ExpressJS and MongoDB</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Provide seamless front-end and back-end integration.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Ensure cross-device compatibility for a flawless user experience.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='what-i-do-section c-pd-3'>
                <div className='container'>
                    <div className='section-heading '>
                        <h2 className='h1'>Cloud</h2>
                        <div className='ad-font'>Architecture</div>
                    </div>
                    <div className='two-colum-wrapper md-column-reverse'>
                        <motion.div className='two-colum-content' ref={refSection3} initial="hidden"
                            animate={controlsSection3} variants={slideInFromLeft(0.5)}>
                            <div className='code-icon-wrapper'>
                                <ul>
                                    <li>
                                        <span className='code-icon'>{AWSIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{GoogleCloudIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{HerokuIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{FirebaseIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{mongoIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{DockerIcon("40px", "40px")}</span>
                                    </li>

                                </ul>
                                <ul className='para-rtl'>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Build and deploy robust applications that grow with your business using AWS, Google Cloud, and Heroku.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Handle cloud architecture, setup, and deployment from start to finish.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Maximize application speed, security, and reliability with cutting-edge cloud optimization strategies.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Leverage Docker for flexible, efficient deployment and management of your applications.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className='right-pt w-40 two-colum-image-wrapper md-column-reverse' ref={refSection3} initial="hidden"
                            animate={controlsSection3} variants={slideInFromRight(0.5)}>
                            <img src={SectionThreeImg} alt='cloud service image' />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='what-i-do-section c-pd-3'>
                <div className='container'>
                    <div className='section-heading '>
                        <h2 className='h1'>Data</h2>
                        <div className='ad-font'>Science & AI</div>
                    </div>
                    <div className='two-colum-wrapper md-column'>
                        <motion.div className='left-pt w-40 two-colum-image-wrapper' ref={refSection4} initial="hidden"
                            animate={controlsSection4} variants={slideInFromLeft(0.5)}>
                            <img src={SectionFourImg} alt='analytic image' />
                        </motion.div>
                        <motion.div className='two-colum-content' ref={refSection4} initial="hidden"
                            animate={controlsSection4} variants={slideInFromRight(0.5)}>
                            
                            <div className='code-icon-wrapper'>
                                <ul>
                                    <li>
                                        <span className='code-icon'>{TenserFlowIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PytourchIcon("40px", "40px")}</span>
                                    </li>
                                </ul>

                                <ul className='para-rtl'>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Implement AI and machine learning models using TensorFlow and PyTorch.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Transform raw data into actionable insights that empower businesses to make smarter, data-driven decisions.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Drive smarter decision-making with data-driven solutions.</span>
                                    </li>
                                    <li>
                                        <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Leverage the power of AI to drive innovation, optimize operations, and uncover hidden opportunities in your data.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;