import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <div className='container-fluid project'>
      <div className='container'>
        <h1 className="fw-bold mb-3 text-uppercase">Code. Create. Conquer.</h1>
        <p className="text-muted">
          A showcase of my work
        </p>
        <div className='row'>
          <h3 className="fw-bold">🔁 Clone Projects</h3>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card1 */}
            <div className="project-card bg-transparent">
              <img src="/charity.png" alt="Book My Show Clone" className="card-img-top img-fluid" />
              <div className="card-body pt-2">
                <h5 className="fs-4 text-uppercase fw-bold">The Charity Clone</h5>
                <p className="card-info">Recreated the popular charity platform.</p>
                <p><strong>Tech Stack:</strong> Html, css, media query</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://charityprojects.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/vaibhavsonar8540/The-charity" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card2 */}
            <div className='project-card bg-transparent'>
              <img src="/shark tank.png" alt="Hillcrest website clone" className='card-img-top img-fluid' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>Shark tank js project</h5>
                <p className='card-info'>Creating a project for crud operation and filter products</p>
                <p><strong>Tech Stack:</strong> Html, css, Bootstrap, js</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://sharktank-front.vercel.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/vaibhavsonar8540/sharktank-front" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card3 */}
            <div className='project-card bg-transparent'>
              <img src="/adminpanel.png" alt="" className='img-fluid img-top' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>Dashboard Website</h5>
                <p className='card-info'>Recreated a  Website of the bank dashboard</p>
                <p><strong>Tech Stack: </strong>Html, css, Bootstrap, Chart.js</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://admin-panel7.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/vaibhavsonar8540/Admin-Panel" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

           <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card3 */}
            <div className='project-card bg-transparent'>
              <img src="/gym.png" alt="" className='img-fluid img-top' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>Gym clone Website</h5>
                <p className='card-info'>Recreated a  Website of a gym</p>
                <p><strong>Tech Stack: </strong>Html, css, Bootstrap, js</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://js-gym-project-fe.vercel.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/vaibhavsonar8540/jsGymProjectFE" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Project