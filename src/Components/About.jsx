import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid px-5"  style={{ backgroundColor: "#f0f0f0" }}>
      <div className='container'>
        <div className='row about'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
            <img src="/developer.jpg" alt="" className='img-fluid about-logo' />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-4">
            <p className="text-secondary text-md-start w-100">
              👋 Hey, I'm <span className="highlight">Sonar Vaibhav</span>, a passionate
              <strong> Full Stack Web Developer</strong> on my journey to becoming a
              <strong> Full-Stack Developer</strong>. I specialize in crafting modern, responsive,
              and user-friendly websites.
            </p>

            <p className="text-secondary text-md-start w-100">
              I have expertise in <strong>HTML, CSS, JavaScript, jQuery, Bootstrap, and React</strong>.
              Currently, I am expanding my skillset by learning <strong>Redux, Next.js, Node.js, MongoDB,
                and Mongoose</strong> to transition into full-stack development.
            </p>

            <h4 className="fw-bold mt-4 text-md-start w-100">💻 Real-World Projects</h4>
            <ul className="project-list text-secondary ps-0">
              <li><strong>Graphic Designer Portfolio Website</strong> – Showcasing creative design work.</li>
              <li><strong>Logo Lab Technology</strong> – A website displaying graphic-related products.</li>
              <li><strong>WedGram Designs</strong> – A platform for small wedding invitation videos.</li>
            </ul>

            <p className="text-secondary text-md-start w-100">
              Additionally, I have built multiple <strong>website clones</strong>, enhancing my ability to
              replicate UI/UX designs and improve web functionality.
            </p>

            <h4 className="fw-bold mt-4 text-md-start w-100">🚀 What's Next?</h4>
            <p className="text-secondary text-md-start w-100">
              As I continue my journey into backend development, my goal is to build
              <strong> scalable full-stack applications</strong> and provide
              <strong> high-quality digital solutions</strong> for businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About