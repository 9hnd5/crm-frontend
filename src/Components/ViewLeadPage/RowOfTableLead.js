import React from 'react';
import { connect } from 'react-redux';
import { openModalAction } from '../../Actions/appActions';
class RowOfTableLead extends React.Component {
    handleClick = () => {
        this.props.openModal();
        this.props.onRowOfTableClick(this.props.lead);
    }
    render() {
        const { id, firstName, lastName, email, phone, source, status, createDate, updateDate } = this.props.lead
        let doNotCall = status.toLowerCase() === "do not call" ? true : false;
        return (
            <tr onClick={this.handleClick}>
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
        }
    };
}
export default connect(null, mapDispatchToProps)(RowOfTableLead);