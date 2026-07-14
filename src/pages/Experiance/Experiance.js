import React, { useState } from "react";
import SectionFourImg from "../../assets/image/section_4_img.svg";
import logo from "../../assets/image/elsnerlogo2.svg";
import "./Experiance.css";
const Experiance = () => {
  const [openAccordian, setOpenAccordian] = useState({
    first: false,
    second: false,
  });

  return (
    <>
      <section className="experiance-section c-pd-3">
        <div className="container">
          <div className="experiance-main-wrapper">
            <div className="image-wrapper">
              <div className="main-image-wrappe">
                <img src={SectionFourImg} alt="Experience overview" />
              </div>
            </div>
            <div className="content-wrapper">
              <div className="experiance-title">
                <h2 className="ad-font">Experience</h2>
              </div>
              <div class="sub-title">
                <h3>Work, Internship and Volunteership</h3>
              </div>
              <div class="para-rtl">
                <p>
                  I've completed two internships. I've mostly done projects on
                  my own and I am actively looking for internships. I love
                  organizing workshops to share my knowledge with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-accord-section c-pd-3">
        <div className="container">
          <ul className="main-accord-wrapper">
            <li className="main-accord-item">
              <div className="accord-main-wrapper">
                <div
                  onClick={() =>
                    setOpenAccordian({
                      second: false,
                      first: !openAccordian.first,
                    })
                  }
                  className={
                    openAccordian.first ? "accord-title active" : "accord-title"
                  }
                >
                  <span className="accord-title-heading h3">Internship</span>
                </div>
                <div
                  className={
                    openAccordian.first
                      ? "accord-content active"
                      : "accord-content"
                  }
                >
                  <div className="accord-card">
                    <div className="accord-card-content">
                      <div className="accord-card-image">
                        <img src={logo} alt="Elsner Technologies" />
                      </div>
                      <div className="accord-card-content-main">
                        <div className="accord-card-title">
                          <div className="accord-card-title-heading">
                            <h3>ReactJs Developer</h3>
                            <div className="btn-link-effect">
                              <p>Elsner Technologies PVT. LTD.</p>
                            </div>
                          </div>
                          <div className="accord-card-details">
                            <p className="accord-details-main">
                              Jan 2021
                            </p>
                            <p>Ahmedabad, Gujarat</p>
                          </div>
                        </div>
                        <div className="accord-card-description">
                          <p>
                          I've gained substantial experience during my 6-month internship at Elsner Technologies Pvt. Ltd., where I worked on ReactJS, NodeJS, and AngularJS. This hands-on experience helped me hone my skills in full-stack development.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="main-accord-item">
              <div className="accord-main-wrapper">
                <div
                  onClick={() =>
                    setOpenAccordian({
                      first: false,
                      second: !openAccordian.second,
                    })
                  }
                  className={
                    openAccordian.second
                      ? "accord-title active"
                      : "accord-title"
                  }
                >
                  <span className="accord-title-heading h3">Work</span>
                </div>
                <div
                  className={
                    openAccordian.second
                      ? "accord-content active"
                      : "accord-content"
                  }
                >
                  <div className="accord-card">
                    <div className="accord-card-content">
                      <div className="accord-card-image">
                        <img src={logo} alt="Elsner Technologies"/>
                      </div>
                      <div className="accord-card-content-main">
                        <div className="accord-card-title">
                          <div className="accord-card-title-heading">
                            <h3>Full Stact JS Developer</h3>
                            <div className="btn-link-effect">
                            <p>Elsner Technologies PVT. LTD.</p>
                            </div>
                          </div>
                          <div className="accord-card-details">
                            <p className="accord-details-main">
                              May 2021 - Ongoing
                            </p>
                            <p>Ahmedabad, Gujarat</p>
                          </div>
                        </div>
                        <div className="accord-card-description">
                          <p>
                          For the past two years, I’ve continued my journey with Elsner as a Junior Full Stack JavaScript Developer, contributing to various complex projects, building scalable applications, and expanding my expertise in modern JavaScript frameworks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Experiance;
