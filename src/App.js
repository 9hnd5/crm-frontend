import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import ViewLeadPage from './Components/ViewLeadPage/ViewLeadPage';
import ViewReportPage from './Components/ViewReportPage/ViewReportPage';
import ReactModal from 'react-modal';
import { closeModalAction, openModalAction } from './Actions/appActions';
import { connect } from 'react-redux';
import './App.css'
import { editLeadAction } from './Actions/leadsActions';
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
ReactModal.setAppElement('#root');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: "", 
      source: "", 
      status: "", 
      createDate: "", 
      updateDate: ""
    }
  }
  openModal = () => {
    this.props.openModal();
  }
  closeModal = () => {
    this.props.closeModal();
  }
  saveModal = () => {
    let newLead = {
      ...this.state,
      id: this.props.leadNeedToEdit.id
    }
    this.props.saveModal(newLead);
    this.props.closeModal();
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  afterModalClose = () =>{
    this.setState({
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: "", 
      source: "", 
      status: "", 
      createDate: "", 
      updateDate: ""
    })
  }
  render() {
    const { modalIsOpen } = this.props;
    const { firstName, lastName, email, phone, source, status, createDate, updateDate } = this.props.leadNeedToEdit
    return (
      <Router>
        <div>
          <div className="menu">
            <Menu />
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={ViewLeadPage} />
              <Route path="/report" component={ViewReportPage} />
            </Switch>
          </div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterClose={this.afterModalClose}
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
                    <input name="firstName" onChange={this.handleChange} type="text" className="form-control" value={this.state.firstName || firstName} />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input name="lastName" onChange={this.handleChange} type="text" className="form-control" defaultValue={lastName} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3">
                  <div className="form-group">
                    <label>Email:</label>
                    <input name="email" onChange={this.handleChange} type="text" className="form-control" defaultValue={email} />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Phone:</label>
                    <input name="phone" onChange={this.handleChange} type="text" className="form-control" defaultValue={phone} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-3">
                  <div className="form-group">
                    <label>Source:</label>
                    <input name="source" onChange={this.handleChange} type="text" className="form-control" defaultValue={source} />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Status:</label>
                    <select name="status" value={status} onChange={this.handleChange} className="form-control">
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
                    <input name="createDate" onChange={this.handleChange} type="text" className="form-control" defaultValue={createDate} />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Update Date:</label>
                    <input name="updateDate" onChange={this.handleChange} type="text" className="form-control" defaultValue={updateDate} />
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
      </Router>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.app.modalIsOpen,
    leadNeedToEdit: state.lead.leadNeedToEdit
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(openModalAction(true));
    },
    closeModal: () => {
      dispatch(closeModalAction(false));
    },
    saveModal: (newLead) => {
      dispatch(editLeadAction(newLead))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
