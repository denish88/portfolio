import React from 'react'
import './Education.css'
import logoImage from '../../assets/image/om_eng.webp'
import educationImg from '../../assets/image/education_image.svg'
import {
  AWSIcon,
  DockerIcon,
  FirebaseIcon,
  GoogleCloudIcon,
  PowerIcon,
  angularIcon,
  graphqlIcon,
  jsIcon,
  mongoIcon,
  nextjslIcon,
  nodeIcon,
  reactIcon,
  shopifyIcon,
  sqlIcon,
} from '../../logos'

const certificateArra = [
  {
    logo: AWSIcon('96px', '58px'),
    title: 'AWS Certified Cloud Practitioner',
    content: 'Amazon Web Services',
  },
  {
    logo: GoogleCloudIcon('88px', '70px'),
    title: 'Google Cloud Fundamentals',
    content: 'Google Cloud',
  },
  {
    logo: reactIcon('80px', '80px'),
    title: 'Front-End Web Development',
    content: 'React.js & Modern UI',
  },
  {
    logo: nextjslIcon('80px', '80px'),
    title: 'Next.js App Development',
    content: 'Vercel / Next.js',
    invert: true,
  },
  {
    logo: nodeIcon('80px', '80px'),
    title: 'Node.js Backend Development',
    content: 'OpenJS Foundation',
  },
  {
    logo: mongoIcon('80px', '80px'),
    title: 'MongoDB for Developers',
    content: 'MongoDB University',
  },
  {
    logo: DockerIcon('90px', '70px'),
    title: 'Docker Essentials',
    content: 'Container fundamentals',
  },
  {
    logo: FirebaseIcon('72px', '80px'),
    title: 'Firebase App Development',
    content: 'Google Firebase',
  },
  {
    logo: jsIcon('72px', '72px'),
    title: 'JavaScript Algorithms',
    content: 'Modern JavaScript (ES6+)',
  },
  {
    logo: graphqlIcon('80px', '80px'),
    title: 'GraphQL API Design',
    content: 'API query language',
  },
  {
    logo: sqlIcon('90px', '70px'),
    title: 'SQL Database Design',
    content: 'Relational databases',
  },
  {
    logo: shopifyIcon('80px', '80px'),
    title: 'Shopify Theme Development',
    content: 'Ecommerce storefronts',
  },
  {
    logo: angularIcon('80px', '80px'),
    title: 'Angular Web Applications',
    content: 'Angular framework',
  },
]

const Education = () => {
  return (
    <>
      <section className="c-pd-3">
        <div className="container">
          <div className="eduction-wrapper">
            <div className="eduction-image left-pt">
              <img src={educationImg} alt="education illustration" />
            </div>
            <div className="eduction-content">
              <div className="section-heading">
                <h2>My</h2>
                <div className="ad-font">Education</div>
              </div>
              <div className="sub-heading">
                <h3>Basic Qualification and Certification</h3>
              </div>
              <div className="para-rtl">
                <p>
                  I actively participate in hackathons and other tech-related
                  activities. Below are some of my major certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="degree c-pd-3">
        <div className="container">
          <div className="section-heading">
            <h2>Degree</h2>
            <div className="ad-font">Received</div>
          </div>
          <div className="degree-wrapper">
            <div className="degree-icon-main">
              <div className="degree-icon-item">
                <img src={logoImage} alt="Om Engineering Institute" />
              </div>
            </div>
            <div className="degree-content">
              <div className="degree-content-item">
                <div className="degree-content-heading">
                  <h3>Om Engineering Institute</h3>
                  <div className="year-wrapper">
                    <span className="year-count">2017-2018</span>
                  </div>
                </div>
                <div className="degree-sub-heading">
                  <h4>B.E. Computer Engineering</h4>
                </div>
                <div className="degree-description">
                  <ul className="para-rtl">
                    <li>
                      <span className="code-icon">
                        {PowerIcon('15px', '15px', 'yellow')}
                        Completed Bachelor of Engineering in Computer
                        Engineering with a focus on software development.
                      </span>
                    </li>
                    <li>
                      <span className="code-icon">
                        {PowerIcon('15px', '15px', 'yellow')}
                        Built academic projects covering web technologies, data
                        structures, and databases.
                      </span>
                    </li>
                    <li>
                      <span className="code-icon">
                        {PowerIcon('15px', '15px', 'yellow')}
                        Strengthened fundamentals in programming, networking,
                        and system design.
                      </span>
                    </li>
                    <li>
                      <span className="code-icon">
                        {PowerIcon('15px', '15px', 'yellow')}
                        Participated in technical events and hands-on coding
                        workshops.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-section c-pd-3">
        <div className="container">
          <div className="section-heading">
            <h2>Certifications</h2>
          </div>
          <p className="cert-intro">
            A showcase of certifications that support my full-stack and cloud
            development work.
          </p>
          <ul className="logo-wrapper">
            {certificateArra.map((ele) => (
              <li className="logo-item" key={ele.title}>
                <div className="logo-item-main">
                  <div className="image-wrapper">
                    <div
                      className={
                        ele.invert ? 'main-image main-image--invert' : 'main-image'
                      }
                    >
                      {ele.logo}
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="logo-title">
                      <h4>{ele.title}</h4>
                    </div>
                    <div className="para-rtl">{ele.content}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Education
