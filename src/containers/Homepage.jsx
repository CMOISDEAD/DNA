import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from '../components/About'
import Chart from '../components/Chart'
import Projects from '../components/Projects'
import '../styles/main.scss'

import project1 from '../assets/images/dropweb.png'
import project2 from '../assets/images/newdropview.png'
import project3 from '../assets/images/bloquniq.png'


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
                <div className="skills">
                    <div className="h1 text-center text-nord0 m-5">My Talents</div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <Chart icon="js" title="Javascript" description="lorem" footer="1" />
                        <Chart icon="react" title="React" description="lorem" footer="2" />
                        <Chart icon="node-js" title="Nodejs" description="lorem" footer="3" />
                    </div>
                </div>
                <div className="h1 text-center text-nord0 m-5">My Projects</div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <Projects image={project1} title="Task Manager" description="lorem" link="https://github.com/CMOISDEAD/DropTask" />
                    <Projects image={project2} title="Riot Games api" description="lorem" link="https://github.com/CMOISDEAD/DROPSTATS" />
                    <Projects image={project3} title="Blog University" description="lorem" link="https://github.com/CMOISDEAD/BlogUniQ" />
                </div>
            </div>
        </div>
    )
}

export default Homepage