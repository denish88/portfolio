import React from 'react'
import './Project.css'
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight } from '../../utils/motion'
import SectionTwoImg from '../../assets/image/projects.svg'
import { KerasIcon } from '../../logos'




const Project = () => {
    return (<>
        <section className='project-section c-pd-3'>
            <div className='container'>
                <div className='section-heading '>
                    <h2 className='h1'>Here's</h2>
                    <div className='ad-font'>what i do</div>
                </div>
                <div className='two-colum-wrapper md-column'>

                    <div className='left-pt w-40 two-colum-image-wrapper' initial="hidden"
                        variants={slideInFromLeft(1.5)} >
                        <img src={SectionTwoImg} alt='work image' />
                    </div>

                    <div className='two-colum-content left-pt' initial="hidden"
                        variants={slideInFromRight(0.5)}>
                        <div className='left-pt'>
                            <div className='sub-heaidng'>
                                <h3 className='h2'>Projects</h3>
                            </div>
                            <div className='para-rtl'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='project-log-section c-pd-3'>
        <div className='container'>
            <div className='project-log-wrapper'>
                <div className='project-item'>
                    <div className='project-main-item'>
                      <div className='sub-heading'>
                        <h2>title</h2>
                      </div>
                      <div className='para-rtl'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='project-icon'>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className='project-main-item'>
                      <div className='sub-heading'>
                        <h2>title</h2>
                      </div>
                      <div className='para-rtl'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='project-icon'>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className='project-main-item'>
                      <div className='sub-heading'>
                        <h2>title</h2>
                      </div>
                      <div className='para-rtl'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='project-icon'>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className='project-main-item'>
                      <div className='sub-heading'>
                        <h2>title</h2>
                      </div>
                      <div className='para-rtl'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='project-icon'>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                        <div className='project-icon-item'>
                           <span className='code-icon'>{KerasIcon("40px", "40px")}</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Project
