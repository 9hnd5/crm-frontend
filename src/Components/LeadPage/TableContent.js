import React from 'react';
import { connect } from 'react-redux';
import ModalEdit from './ModalEdit';
import RowContent from './RowContent';
import { updateLeadByIdRequest } from '../../Actions/leadsActions'
import { PAGE_SIZE } from '../../Constants/constants';
import moment from 'moment';
import { validateEmail } from '../../Ultils/validateEmail';
import { openModalAction } from '../../Actions/appActions';
// import loading from './../../Assets/loading.gif'
class TableContent extends React.Component {
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
            },
        }
    }
    handleRowOfTableClick = (lead) => {
        this.setState({
            currentLead: lead
        })
    }
    handleModalChange = (event) => {
        this.setState({
            currentLead: {
                ...this.state.currentLead,
                [event.target.name]: event.target.value
            }
        })
    }
    handleModalSave = () => {
        let formatDate = ["DD/MM/YYYY", "D/M/YYYY", "YYYY/MM/DD", "YYYY/M/D"]
        let isValidEmail = validateEmail(this.state.currentLead.email);
        let isValidCreateDate = moment(this.state.currentLead.createDate, formatDate, true).isValid();
        let isValidUpdateDate = moment(this.state.currentLead.updateDate, formatDate, true).isValid();
        let { id, ...newLead } = this.state.currentLead;
        if (isValidEmail && isValidCreateDate && isValidUpdateDate) {
            newLead = {
                ...newLead,
                createDate: moment(this.state.currentLead.createDate, formatDate, true).format("YYYY/MM/DD"),
                email: this.state.currentLead.email,
                updateDate: moment(this.state.currentLead.updateDate, formatDate, true).format("YYYY/MM/DD"),
            }
            this.props.updateLeadByIdRequest(id, newLead);
            this.props.openModal(false);
        } else {
            alert("Please fill the input correctly")
            this.props.openModal(true);
        }
    }
    handleModalClose = () => {
        this.props.openModal(false);
    }
    displayLeads = () => {
        let leads = this.props.leads;
        let start = (this.props.pageIndex - 1) * PAGE_SIZE;
        let end = start + PAGE_SIZE;
        leads = leads.slice(start, end);
        return leads.map((lead, index) => {
            return <RowContent onRowOfTableClick={this.handleRowOfTableClick} key={index} lead={lead} />
        });
    }
    componentDidMount = () => {
    }
    render() {
        let { currentLead } = this.state;
        return (
            <div className="table-lead">
                {/* <div className="table-loading">
                    <img src={loading} class="img-responsive" alt="Image" />
                </div> */}
                <table className="table table-hover table-bordered">
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
                        {this.displayLeads()}
                    </tbody>
                </table>
                <ModalEdit
                    handleModalSave={this.handleModalSave}
                    handleModalChange={this.handleModalChange}
                    handleModalClose ={this.handleModalClose}
                    currentLead={currentLead}
                    isCloseModal={this.state.isCloseModal}
                />
            </div>
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        isTableLeadsLoading: state.app.isTableLeadsLoading,
        leads: state.lead.leadsAfterFilter,
        pageIndex: state.lead.pageIndex,
        isModalOpen: state.app.isOpenModal
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        updateLeadByIdRequest: (id, newLead) => {
            dispatch(updateLeadByIdRequest(id, newLead))
        },
        openModal: (isModalOpen) => {
            dispatch(openModalAction(isModalOpen))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContent);