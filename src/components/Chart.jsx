import React from 'react'

const Chart = (props) => {

    return (
        <div className="col">
            <div className="card card-outline-nord">
                <div className="shadow-box">
                    <div className="card-header text-center text-uppercase">
                        <i className={`fab fa-${props.icon} h1`}> {props.title}</i>
                    </div>
                    <div className="card-body text-center">
                        {props.description}
                    </div>
                    <div className="card-footer text-center">
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart