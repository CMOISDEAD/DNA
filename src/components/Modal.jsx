import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            textMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name
        const value = target.value
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        alert(`email:${this.state.email}--- text: ${this.state.textMessage}`);
        event.preventDefault();
    }

    render(props) {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" aria-labelledby={`${this.props.id}Label`} aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${this.props.id}Label`}>Contact Me</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center">
                                {/* <div class="spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div> */}
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="h3 text-center">Mail me</div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" name="email" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.email} onChange={this.handleChange} />
                                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">With textarea</span>
                                        <textarea className="form-control" aria-label="With textarea" name="textMessage" value={this.state.textMessage} onChange={this.handleChange}></textarea>
                                    </div>
                                    <input type="submit" value="Submit" className="btn btn-nord w-100" />
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-nord" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal