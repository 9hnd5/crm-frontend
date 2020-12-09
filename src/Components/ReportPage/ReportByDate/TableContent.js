import React from 'react'
import { connect } from 'react-redux';
import RowContent from './../ReportByDate/RowContent';
class TableContent extends React.Component {
    displayReportLead = () => {
        return this.props.leads.map((r, index) => {
            return <RowContent key={index} dataRow={r} />
        });
    }
    componentDidMount = () => {
        
    }
    render() {
        return (
            <table className="table table-bordered table-hover">
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
                    {this.displayReportLead()}
                </tbody>
            </table>
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        leads: state.reportLead.reportLeadsByDate
    };
}
export const mapDispatchToProps = (dispatch) => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContent);