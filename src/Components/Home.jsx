import React from "react";
import "./Home.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mt-4 home">
      <div className="row align-items-center info">
        {/* Left Section - Text Content */}
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 fw-bold">
            Hi, <span className="typing">I'm Vaibhav</span>
          </h1>
          <p className="fs-4 fw-bold text-secondary">
            A passionate full stack developer skilled in building responsive, high-performance, and dynamic web applications using modern frontend and backend technologies.
          </p>
          <a href="#contact">
            <button className="btn-dark">
              LET’S WORK TOGETHER
            </button>
          </a>

          {/* Social Icons */}
          <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
            <a href="https://www.instagram.com/vaibhav_sonar__/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/vaibhavsonar8540/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="social-icon" />
            </a>
            <a href="https://github.com/vaibhavsonar8540" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="social-icon" />
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
