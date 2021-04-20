import React from 'react'
//import logo from '../assets/developer.svg'

const Slider = (props) => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.imgSlider2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.imgSlider2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.imgSlider2} className="d-block w-100" alt="..." />
                </div>
            </div>
            <div className="carousel-text">
                <div className="text-center">
                    <p className="h5 banner-text text-nord5">DROPDEADS</p>
                    <div className="container">
                        <p className="text-start m-5 text-nord6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus libero atque accusantium excepturi
                            sapiente quos mollitia iusto incidunt alias architecto rem laudantium, amet perspiciatis eveniet iste repudiandae
                            voluptatibus repellendus!
                        </p>
                    </div>
                    {/* <img className="imagensvg" src={logo} alt="freepik" /> */}
                    <div className="arrow-down">
                        <i className="bi bi-arrow-down-short text-nord5"></i>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider