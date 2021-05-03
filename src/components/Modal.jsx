import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ id }) => {
  const [datos, setDatos] = useState({
    email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setDatos({
      [e.target.name]: e.target.value,
    })
    console.log(`${e.target.name}::${e.target.value}`)
  }

  const enviarDatos = (e) => {
    e.preventDefault()
    window.open(
      `mailto:camilodavina@gmail.com?subject=Email%20From: ${datos.email}&body=${datos.message}`,
      '_blank'
    )
  }

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              Contact Me
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center">
              <form action="" onSubmit={enviarDatos}>
                <div className="h3 text-center">Mail me</div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Name
                  </span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">With textarea</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="message"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-nord w-100"
                />
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-nord"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.PropTypes = {
  id: PropTypes.string,
}

export default Modal
