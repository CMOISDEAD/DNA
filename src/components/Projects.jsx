import React from 'react'

const Projects = (props) => {
    return (
        <div className="col">
            <div className="card text-center card-gradient">
                <div className="shadow-box">
                    <img src={props.image} className="card-img-top image-projects" alt={props.title} />
                    <div className="card-body text-nord4">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text text-nord4">{props.description}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href={props.link} className="text-nord7 link-proper" target="_blank"><i className="fab fa-github"> Github repositorie</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects