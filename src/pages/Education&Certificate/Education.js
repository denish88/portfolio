import React from 'react'
import './Education.css'
import logoImage from '../../assets/image/om_eng.webp';
import educationImg from '../../assets/image/education_image.svg'
import { AWSIcon, PowerIcon } from '../../logos'
import { PrimaryButton } from '../../components/Button/PrimaryButton';
const Education = () => {


let certificateArra=[{
  logo:AWSIcon("100px","100px"),
  title:"AWS certified cloud practioner",
  content:"Amazone web service",
  bgColor:"#fff",
  description:"Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is"
},
{
  logo:AWSIcon("100px","100px"),
  title:"AWS certified cloud practioner",
  content:"Amazone web service",
  bgColor:"#fff",
  description:"Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is"

},
{
  logo:AWSIcon("100px","100px"),
  title:"AWS certified cloud practioner",
  content:"Amazone web service",
  bgColor:"#fff",
  description:"Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is"

},
{
  logo:AWSIcon("100px","100px"),
  title:"AWS certified cloud practioner",
  content:"Amazone web service",
  bgColor:"#fff",
  description:"Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is"

},
{
  logo:AWSIcon("100px","100px"),
  title:"AWS certified cloud practioner",
  content:"Amazone web service",
  bgColor:"#fff",
  description:"Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is Hello this is"

}
]


  return (<>
    <section className='c-pd-3'>
      <div className='container'>
        <div className='eduction-wrapper'>
          <div className='eduction-image left-pt'>
            <img src={educationImg} alt='education image' />
          </div>
          <div className='eduction-content'>
            <div className='section-heading'>
              <h2>My</h2>
              <div className='ad-font'>Education</div>
            </div>
            <div className='sub-heading'>
              <h3>Basic Qualification and Certification</h3>
            </div>
            <div className='para-rtl'>
              <p>I actively participet in hackathons and other tech-related activities. Below are some of my major certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='degree c-pd-3'>
      <div className='container'>
        <div className='section-heading'>
          <h2>Degree</h2>
          <div className='ad-font'>Received</div>
        </div>
        <div className='degree-wrapper'>
          <div className='degree-icon-main'>
            <div className='degree-icon-item'>
              <img src={logoImage} type="image/webp"/>
            </div>
          </div>
          <div className='degree-content'>
            <div className='degree-content-item'>
              <div className='degree-content-heading'>
                <h3>Om Engineering Institute</h3>
                <div className='year-wrapper'>
                  <span className='year-count'>2017-2018</span>
                </div>
              </div>
              <div className='degree-sub-heading'>
                <h4>B.E. Computer Engineering</h4>
              </div>
              <div className='degree-description'>
                <ul className='para-rtl'>
                  <li>
                    <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Please allow ads and let sponsors fund your surfing.12 and let sponsors fund your surfing.12</span>
                  </li>
                  <li>
                    <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Please allow ads and let sponsors fund your surfing.12</span>
                  </li>
                  <li>
                    <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Please allow ads and let sponsors fund your surfing.12</span>
                  </li>
                  <li>
                    <span className='code-icon'>{PowerIcon("15px", "15px", "yellow")}Please allow ads and let sponsors fund your surfing.12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='logo-section c-pd-3'>
      <div className='container'>
        <div className='section-heading'>
          <h2>certifications</h2>
        </div>
        <div className='logo-wrapper'>
          {certificateArra.map((ele,index)=><div className='logo-item'>
            <div className='logo-item-main' key={index}>
              <div className='image-wrapper' style={{backgroundColor:ele.bgColor}}>
                <div className='main-image'>{ele.logo}</div>
              </div>
              <div className='content-wrapper'>
                <div className='logo-title' > <h4>{ele.title}</h4></div>
                <div className='para-rtl'>{ele.content}</div>
              </div>
              <div className='hover-wrapper'>
                <div className='logo-title' > <h4>{ele.title}</h4></div>
                <div className='para-rtl'>{ele.description}</div>
                <div onClick={()=>alert("clickkk")}>
                <PrimaryButton classname="primary-btn" text="view certificate" />
                </div>
              </div>
            </div>
          </div>)}
          
        </div>
      </div>
    </section>
  </>)
}

export default Education