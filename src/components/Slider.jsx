import React from 'react'
import logo from '../assets/developer.svg'

const Slider = (props) => {
    return (
        <div className="slider">
            <div className="carousel-text">
                <div className="row mx-auto">
                    <div className="col p-5">
                        <p className="h5 banner-text text-center text-nord5">DROPDEADS</p>
                        <p className="text-nord6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus libero atque accusantium excepturi
                            sapiente quos mollitia iusto incidunt alias architecto rem sapiente quos mollitia iusto incidunt alias architecto rem 
                            laudantium, amet perspiciatis eveniet iste repudiandae
                            voluptatibus repellendus!
                        </p>
                        <div className="d-grid gap-2 mt-9">
                            <button className="btn btn-outline-light" type="button">Contact Me</button>
                            <button className="btn btn-light" type="button">Know More</button>
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
                        <i className="bi bi-arrow-down-short text-nord5"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider