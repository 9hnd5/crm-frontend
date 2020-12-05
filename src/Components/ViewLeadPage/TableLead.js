import React from 'react';
import { connect } from 'react-redux';
import ModalEditLead from './ModalEditLead';
import RowOfTableLead from './RowOfTableLead';
import { fetchLeadRequestAction, updateLeadRequestAction } from './../../Actions/leadsActions'
class TableLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLead: {
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
    }
    handleRowOfTableClick = (lead) => {
        this.setState({
            currentLead: lead
        })
    }
    handleModalUpdateLeadChange = (event) => {
        this.setState({
            currentLead: {
                ...this.state.currentLead,
                [event.target.name]: event.target.value
            }
        })
    }
    handleModalUpdateLeadSave = () => {
        let { id, ...newLead} = this.state.currentLead;
        this.props.updateLeadRequest(id, newLead);
    }
    displayAllLead = () => {
        let result = this.props.getAllLead.map((lead, index) => {
            return (
                <RowOfTableLead onRowOfTableClick={this.handleRowOfTableClick} key={index} lead={lead} />
            )
        }) || [];
        return result;
    }
    componentDidMount = () => {
        this.props.fetchLeadRequest();
    }
    render() {
        let { currentLead } = this.state;
        return (
            <div className="container-fluid">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Source</th>
                            <th>Status</th>
                            <th>Create Date</th>
                            <th>Update Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayAllLead()}
                    </tbody>
                </table>
                <ModalEditLead onhandleModalUpdateLeadSave={this.handleModalUpdateLeadSave} onhandleModalUpdateLeadChange={this.handleModalUpdateLeadChange} currentLead={currentLead} />
            </div>
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        getAllLead: state.lead.listLead
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        updateLeadRequest: (id, newLead) => {
            dispatch(updateLeadRequestAction(id, newLead))
        },
        fetchLeadRequest: () => {
            dispatch(fetchLeadRequestAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableLead);