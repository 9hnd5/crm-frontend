import React from 'react'
import { connect } from 'react-redux';
import { fetchReportLeadByStatusRequest } from '../../../Actions/reportLeadAction';
import RowContent from './../ReportByGroupStatus/RowContent'
class TableContent extends React.Component {
    displayReportLeadByStatus = () => {
        return this.props.reportLeadsByStatus.map((r, index) => {
            return <RowContent key={index} dataRow={r} />
        });
    }
    componentDidMount = () => {
        this.props.fetchReportLead();
    }
    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Number Of Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayReportLeadByStatus()}
                </tbody>
            </table>
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        reportLeadsByStatus: state.reportLead.reportLeadsByStatus
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        fetchReportLead: () => {
            dispatch(fetchReportLeadByStatusRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContent);