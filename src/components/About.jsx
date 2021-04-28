import React from 'react'

const About = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="text-center h1 mb-5 text-nord0 title-text text-uppercase">
                    About Me
                </div>
                <div className="mb-5 text-nord1">
                    Lorem, ipsum dolor sit amet consectetur <b className="important-text">adipisicing</b> elit. Ratione facilis dignissimos numquam excepturi sapiente consectetur placeat inventore harum, dolores rerum? Ullam voluptatum doloremque iste reprehenderit quos dolore error. Laboriosam, nostrum.
                    Officiis molestias in <b className="important-text">illum illo placeat</b> harum cumque deserunt voluptas at, sunt error debitis velit nulla dolore odio ad ipsum quo nemo. Debitis tenetur rem culpa reprehenderit. Omnis, enim quae.
                </div>
                <div className="text-center h3 mb-5 text-nord0 title-text text-uppercase">
                    Skills :
                </div>
                <div className="skills text-nord1 text-center">
                    <i className="fab fa-html5 skill-icons "><p className="text-center">html5</p></i>
                    <i className="fab fa-css3 skill-icons "><p className="text-center">css3</p></i>
                    <i className="fab fa-js skill-icons "><p className="text-center">javascript</p></i>
                    <i className="fab fa-react skill-icons "><p className="text-center">react</p></i>
                    <i className="fab fa-node-js skill-icons "><p className="text-center">nodejs</p></i>
                    <i className="fab fa-bootstrap skill-icons"><p className="text-center">bootstrap</p></i>
                    <i className="fab fa-npm skill-icons "><p className="text-center">npm</p></i>
                    <i className="fab fa-sass skill-icons "><p className="text-center">sass</p></i>
                    <i className="fab fa-git-alt skill-icons "><p className="text-center">git</p></i>
                    <i className="fab fa-github-alt skill-icons "><p className="text-center">github</p></i>
                    <i className="fab fa-linux skill-icons "><p className="text-center">linux</p></i>
                    <i className="fab fa-python skill-icons "><p className="text-center">python</p></i>
                </div>
            </div>
            <div className="col">
                <div className="my-image-container">
                    <img src="https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" className="rounded float-end" alt="..." />
                </div>
            </div>
        </div>
    )
}


export default About