import React from 'react';
import { connect } from 'react-redux';
import { openModalAction } from '../../Actions/appActions';
import { setLeadNeedToEditAction } from '../../Actions/leadsActions';
class RowContent extends React.Component {
    openModal = () => {
        this.props.setLeadNeedToEdit(this.props.lead);
        this.props.openModal();
    }
    render() {
        const { id, firstName, lastName, email, phone, source, status, createDate, updateDate } = this.props.lead
        let doNotCall = status.toLowerCase() === "do not call" ? true : false;
        return (
            <tr onClick={this.openModal}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{source}</td>
                <td style={doNotCall ? { color: "red" } : {}}>{status}</td>
                <td>{createDate}</td>
                <td>{updateDate}</td>
            </tr>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => {
            dispatch(openModalAction(true));
        },
        setLeadNeedToEdit: (lead) => {
            dispatch(setLeadNeedToEditAction(lead));
        }
    };
}
export default connect(null, mapDispatchToProps)(RowContent);