import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import TableForGroupStatus from './ReportByGroupStatus/TableContent';
import TableForRangeDate from './ReportByDate/TableContent';
class ReportPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: ""
        }
    }
    render() {
        return (
            <div className="row flex">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">REPORT LEAD BY DATE</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row search-bar row-m-b-10">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <SearchBar />
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ height: "300px", overflow: "scroll" }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <TableForRangeDate />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">REPORT LEAD BY STATUS</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <TableForGroupStatus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, null)(ReportPage);