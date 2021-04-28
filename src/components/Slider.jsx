import React, { Component } from 'react'
import Modal from './Modal'
import logo from '../assets/coding.svg'

import Highlight from 'react-highlight'

const Slider = (props) => {
    return (
        <div className="slider">
            <div className="carousel-text">
                <div className="row mx-auto">
                    <div className="col p-5">
                        <p className="h5 banner-text text-center text-nord1">Developer</p>
                        <Highlight className='javascript mt-9'>
                            {"// By DROPDEADS"}
                            {"\n"}
                            {"var developer = 'Camilo'"}
                            {"\n"}
                            {"\nconst bestDeveloper = (name) => {"}
                            {"\n   name == 'Camilo'? ("}
                            {"\n   return `${name} is the best in the world!!!`"}
                            {"\n   ) : ("}
                            {"\n   return 'Sorry but you dont are the best developer in the world!'"}
                            {"\n   )"}
                            {"\n}"}
                            {"\nconsole.log(bestDeveloper(developer))"}
                            {"\n"}
                            {"// If you do not understand what is written, I will help you know ... YOU NEED ME."}
                        </Highlight>
                        <div className="d-grid gap-2 mt-9">
                            <button className="btn btn-outline-nord" type="button" data-bs-toggle="modal" data-bs-target="#contactMe">Contact Me</button>
                            <button className="btn btn-nord" type="button">Know More</button>
                        </div>
                    </div>
                    <div className="col-auto">
                        <img className="imagensvg" src={logo} alt="freepik" />
                    </div>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="col h-cmo">
                    <div className="arrow-down text-center">
                        <i className="bi bi-arrow-down-short text-nord1"></i>
                    </div>
                </div>
            </div>
            <Modal id="contactMe" />
        </div>
    )
}

export default Slider