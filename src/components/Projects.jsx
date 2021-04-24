import React from 'react'

const Projects = (props) => {
    return (
        <div className="col">
            <div className="card text-center">
                <img src={props.image} className="card-img-top image-projects" alt={props.title}/>
                <div className="card-body bg-nord1 text-nord4">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-nord4">{props.description}</p>
                </div>
                <div class="card-footer text-muted bg-nord0">
                    <a href={props.link} className="text-nord7" target="_blank"><i className="fab fa-github"> Github repositorie</i></a>
                </div>
            </div>
        </div>
    )
}

export default Projects