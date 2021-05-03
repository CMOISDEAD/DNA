import React from 'react'

const Projects = (props) => {
     return (
        <div className="col">
            <div className="card text-center card-outline-nord">
                <div className="shadow-box">
                    <img
                        src={props.image}
                        className="card-img-top image-projects"
                        alt={props.title}
                    />
                    <div className="card-body text-nord4">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="text-nord4">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        <a
                            href={props.link}
                            className="important-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"> Github repositorie</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
