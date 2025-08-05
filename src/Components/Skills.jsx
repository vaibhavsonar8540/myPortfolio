import React from 'react'
import "./Skill.css"
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaSass, FaNodeJs } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCanva, SiRedux, SiExpress, SiMongoose } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5";
import { RiRobot2Line } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";

const Skills = () => {
  return (

    <div className='container-fluid mt-3 skill' style={{width:"90%",margin:"auto"}}>
      <div className='container'>
        <h1 className="fw-bold mb-3 text-uppercase">Skills</h1>
        <p className="text-muted">
          I specialize in a wide range of technologies used to build fast, responsive, and scalable web applications.
          From designing sleek user interfaces to integrating robust backend services, these are the tools I use to bring ideas to life.
        </p>
      </div>


      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <h2 className='fw-bold text-uppercase'>🖥️ Frontend Skills</h2>
          </div>
          <div className='col-12 col-md-9'>
            <div className='row'>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='html text-center'>
                  <FaHtml5 size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Html</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='css text-center'>
                  <FaCss3Alt size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Css</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='bootstrap text-center'>
                  <FaBootstrap size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Bootstrap</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='jquery text-center'>
                  <DiJqueryLogo size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Jquery</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='js text-center'>
                  <IoLogoJavascript size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Javascript</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='react text-center'>
                  <FaReact size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>ReactJs</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='redux text-center'>
                  <SiRedux size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>Redux</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='Nextjs text-center' id='icon'>
                  <TbBrandNextjs size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>NextJs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <h2 className='fw-bold text-uppercase'>🗄️ Backend Skills</h2>
          </div>
          <div className='col-12 col-md-9'>
            <div className='row'>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='firebase text-center'>
                  <IoLogoFirebase size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>FIREBASE</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='nodejs text-center'>
                  <FaNodeJs size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>NODE.JS</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='Express text-center'>
                  <SiExpress size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>EXPRESS.JS</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='Mongodb  text-center'>
                  <BiLogoMongodb size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>MONGODB</p>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-3 mt-4 d-flex justify-content-center align-items-center h-100'>
                <div className='Mongoose text-center'>
                  <SiMongoose size={300} className='p-4 img-fluid' />
                  <p className='mt-2 fs-5 fw-bold text-dark'>MONGOOSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Skills