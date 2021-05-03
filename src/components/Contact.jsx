import React from 'react'
// import logo from '../assets/searchDeveloper.svg'

const Contact = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="row mx-auto">
        <div className="col">
          <div className="text-center">
            <ul className="list-group bg-nord1 text-nord4">
              <li className="list-group-item bg-nord1 text-nord4">
                <i className="fab fa-github"></i>{' '}
                <a
                  className="important-link"
                  href="https://linkedin.com"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  {' '}
                  Github
                </a>
              </li>
              <li className="list-group-item bg-nord1 text-nord4">
                <i className="fab fa-linkedin"></i>{' '}
                <a
                  className="important-link"
                  href="https://linkedin.com"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  {' '}
                  Linkedin
                </a>
              </li>
              <li className="list-group-item bg-nord1 text-nord4">
                <i className="fab fa-twitter"></i>{' '}
                <a
                  className="important-link"
                  href="https://linkedin.com"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  {' '}
                  twitter
                </a>
              </li>
              <li className="list-group-item bg-nord1 text-nord4">
                <i className="fas fa-paper-plane"></i>
                <a
                  className="important-link"
                  href="https://www.github.com"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  {' '}
                  Mail
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col mx-auto">
          {/* <img src={logo} alt="StorysetImage" className="coding-svg" /> */}
          <div className="text-center text-uppercase fs-2 fw-bold ">
            <span className="text-game text-nord1">
              Contact Me!!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
