import React from "react";
import "./Project.css";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import SectionTwoImg from "../../assets/image/projects.svg";
import { angularIcon, antd, AWSIcon, DockerIcon, dynamoDB, FirebaseIcon, GoogleCloudIcon, graphqlIcon, KerasIcon, kubernets, materialUI, mongoIcon, nextjslIcon, nodeIcon, reactIcon, shopifyIcon, sqlIcon, TenserFlowIcon } from "../../logos";

const Project = () => {
  return (
    <>
      <section className="project-section c-pd-3">
        <div className="container">
          <div className="section-heading ">
            <h2 className="h1">Here's</h2>
            <div className="ad-font">what i do</div>
          </div>
          <div className="two-colum-wrapper md-column">
            <div
              className="left-pt w-40 two-colum-image-wrapper"
              initial="hidden"
              variants={slideInFromLeft(1.5)}
            >
              <img src={SectionTwoImg} alt="Projects overview" />
            </div>

            <div
              className="two-colum-content left-pt"
              initial="hidden"
              variants={slideInFromRight(0.5)}
            >
              <div className="left-pt">
                <div className="sub-heaidng">
                  <h3 className="h2">Projects</h3>
                </div>
                <div className="para-rtl">
                  <p>
                    Over the years, I have worked on a diverse range of projects
                    that span multiple industries and tech stacks. My experience
                    includes building solutions that focus on scalability,
                    performance, and seamless user experience.
                  </p>
                  <p>
                    From web applications to mobile solutions, I've applied my
                    skills in full-stack development, collaborating with
                    cross-functional teams to deliver high-quality products.
                    These projects have enabled me to develop innovative
                    solutions to complex challenges.
                  </p>
                  <p>
                    I have a deep understanding of front-end and back-end
                    technologies, including ReactJS, NodeJS, and cloud services.
                    My projects have allowed me to build robust and secure
                    systems that meet the needs of businesses, both large and
                    small.
                  </p>
                  <p>
                    Whether it's creating user-centric designs or optimizing
                    performance, my focus has always been on delivering value to
                    the end-user while maintaining project goals and deadlines.
                  </p>
                  <p>
                    Throughout my journey, I have gained insights into project
                    management, code optimization, and delivering results that
                    make a tangible impact on my clients' businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-log-section c-pd-3">
        <div className="container">
          <div className="project-log-wrapper">
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>AFDB</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {reactIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {mongoIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {graphqlIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">

                    <span className="code-icon">
                      {DockerIcon("40px", "40px")}
                    </span>
                    </div>
                    <div className="project-icon-item">

                    <span className="code-icon">
                      {AWSIcon("40px", "40px")}
                    </span>
                    </div>
                    <div className="project-icon-item">
                    <span className="code-icon">
                      {materialUI("40px", "40px")}
                    </span>
                    </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>Artboxy</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {reactIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {FirebaseIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {GoogleCloudIcon("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>Dynamic QR Code</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {angularIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {mongoIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {TenserFlowIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {materialUI("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>HRMS</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {reactIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {sqlIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {DockerIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {antd("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>PMS</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {reactIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {mongoIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {KerasIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {antd("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>I Manage</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nextjslIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {mongoIcon("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>Drive Points</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {angularIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {sqlIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {kubernets("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-main-item">
                <div className="sub-heading">
                  <h2>Her Age</h2>
                </div>
                <div className="para-rtl">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                </div>
                <div className="project-icon">
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {reactIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {nodeIcon("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {dynamoDB("40px", "40px")}
                    </span>
                  </div>
                  <div className="project-icon-item">
                    <span className="code-icon">
                      {shopifyIcon("40px", "40px")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
