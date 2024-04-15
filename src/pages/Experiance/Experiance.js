import React, { useState } from "react";
import SectionFourImg from "../../assets/image/section_4_img.svg";
import logo from "../../assets/image/om_eng.webp";
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
                <img src={SectionFourImg} alt="experiance image" />
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
                  <span className="accord-title-heading h3">Work</span>
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
                        <img src={logo} alt="Logo image" type="image/webp" />
                      </div>
                      <div className="accord-card-content-main">
                        <div className="accord-card-title">
                          <div className="accord-card-title-heading">
                            <h3>IT Developer</h3>
                            <div className="btn-link-effect">
                              <p>Sugar Labs</p>
                            </div>
                          </div>
                          <div className="accord-card-details">
                            <p className="accord-details-main">
                              May 2023 - Ongoing
                            </p>
                            <p>Halifax, Nova Scotia</p>
                          </div>
                        </div>
                        <div className="accord-card-description">
                          <p>
                            Canada Revenue Agency (CRA) administers tax laws for
                            the Government of Canada and for most provinces and
                            territories, and administers various social and
                            economic benefit and incentive programs delivered
                            through the tax system.
                          </p>
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
                        <img src={logo} alt="Logo image" type="image/webp"/>
                      </div>
                      <div className="accord-card-content-main">
                        <div className="accord-card-title">
                          <div className="accord-card-title-heading">
                            <h3>IT Developer</h3>
                            <div className="btn-link-effect">
                              <p>Sugar Labs</p>
                            </div>
                          </div>
                          <div className="accord-card-details">
                            <p className="accord-details-main">
                              May 2023 - Ongoing
                            </p>
                            <p>Halifax, Nova Scotia</p>
                          </div>
                        </div>
                        <div className="accord-card-description">
                          <p>
                            Canada Revenue Agency (CRA) administers tax laws for
                            the Government of Canada and for most provinces and
                            territories, and administers various social and
                            economic benefit and incentive programs delivered
                            through the tax system.
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
