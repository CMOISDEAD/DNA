import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from '../components/About'
import '../styles/main.scss'

// ?Variables.
const logo = "https://2.bp.blogspot.com/-ZyHRzw6T0vA/VuJ37q9EfAI/AAAAAAAAAfI/sFlwMfHnl8M5p4Cz2E5ECSjf1Y1sq0K4w/s1600/drop_dead_logo__black__by_captainanalbead-d774y2c.png"
const imgSlider1 = "https://preview.redd.it/4q2as98u1jy41.png?width=1920&format=png&auto=webp&s=a093e52bf5d4bcb66c52043745230842014cddc6"
const imgSlider2 = "https://i.redd.it/uckgbxxfvdr21.png"
const imgSlider3 = "https://fondosmil.com/fondo/29364.jpg"


const Homepage = () => {
    return (
        <div>
            <Navbar img={logo} />
            <Slider imgSlider1={imgSlider1} imgSlider2={imgSlider2} imgSlider3={imgSlider3} />
            <div className="container mt-5">
                <div className="aboutMe">
                    <About />
                </div>
                <div className="skills mt-5">
                    <div className="h1 text-center text-nord0">My Talents</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage