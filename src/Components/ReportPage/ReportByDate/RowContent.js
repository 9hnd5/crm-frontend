import React from 'react'
class RowOfTableRPByDateRange extends React.Component {
    render() {
        let {id, firstName, lastName,email, phone, source, status, createDate, updateDate} = this.props.dataRow;
        let doNotCall = status.toLowerCase() === "do not call" ? true : false;
        return (
            <tr onClick={this.handleClick}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{source}</td>
                <td><span className={doNotCall ? "label label-danger" : ""}>{status}</span></td>
                <td>{createDate}</td>
                <td>{updateDate}</td>
            </tr>
        );
    }
}
export default RowOfTableRPByDateRange;
