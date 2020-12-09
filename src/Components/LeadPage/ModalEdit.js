import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux';
const customStyles = {
    overlay: {
        zIndex: 3
    },
    content: {
        width: "1000px",
        height: "500px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
class ModalEdit extends React.Component {
    closeModal = () => {
        this.props.handleModalClose()
    }
    saveModal = () => {
        this.props.handleModalSave()
    }
    handleChange = (event) => {
        this.props.handleModalChange(event);
    }
    render() {
        const { isModalOpen } = this.props;
        const { firstName, lastName, email, phone, source, status, createDate, updateDate } = this.props.currentLead
        return (
            <div>
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example ReactModal"
                >
                    <div>Edit Lead</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input onChange={this.handleChange} value={firstName} name="firstName" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input onChange={this.handleChange} value={lastName} name="lastName" type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input onChange={this.handleChange} value={email} name="email" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>Phone:</label>
                                    <input onChange={this.handleChange} value={phone} name="phone" type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3">
                                <div className="form-group">
                                    <label>Source:</label>
                                    <input onChange={this.handleChange} value={source} name="source" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>Status:</label>
                                    <select onChange={this.handleChange} value={status} name="status" className="form-control">
                                        <option value="New">New</option>
                                        <option value="Do not call">Do not call</option>
                                        <option value="Not interested in our Services">Not interested in our Services</option>
                                        <option value="Rented Properties">Rented Properties</option>
                                        <option value="Looking for Rental">Looking for Rental</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3">
                                <div className="form-group">
                                    <label>Create Date:</label>
                                    <input onChange={this.handleChange} value={createDate} name="createDate" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>Update Date:</label>
                                    <input onChange={this.handleChange} value={updateDate} name="updateDate" type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <button onClick={this.saveModal} type="button" className="btn btn-success btn-block">Save</button>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <button onClick={this.closeModal} type="button" className="btn btn-danger btn-block">Exit</button>
                            </div>
                        </div>

                    </div>
                </ReactModal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isModalOpen: state.app.isModalOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // closeModal: () => {
        //     dispatch(openModalAction(false))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);