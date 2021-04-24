import React from 'react'

const Chart = (props) => {

    return (
        <div className="col">
            <div className="card text-nord4">
                <div className="card-header bg-nord0 text-center text-uppercase">
                    <i className={`fab fa-${props.icon} h1`}> {props.title}</i>
                    
                </div>
                <div className="card-body bg-nord1">
                    {props.description}
                </div>
                <div className="card-footer bg-nord0 text-center">
                    {props.footer}
                </div>
            </div>
        </div>
    )
}

export default Chart