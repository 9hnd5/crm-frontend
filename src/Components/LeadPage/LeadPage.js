import React from 'react';
import { connect } from 'react-redux';
import { setPageIndex } from '../../Actions/leadsActions';
import { PAGE_SIZE } from '../../Constants/constants';
import Paging from '../Commons/Paging';
import SearchBar from './SearchBar';
import TableContent from './TableContent';
class LeadPage extends React.Component {
    handlePageClick = (pageNumber) => {
        this.props.setPageIndex(pageNumber);
    }
    render() {
        const totalLeads = this.props.leads.length;
        return (
            <div className="row flex" >
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">LEAD FEATURE</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row search-bar row-m-b-10">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <SearchBar />
                                </div>
                            </div>
                            <div className="row table-lead">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <TableContent />
                                </div>
                            </div>
                            <div className="row paging">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <Paging
                                        handlePageClick={this.handlePageClick}
                                        totalRecord={totalLeads}
                                        pageSize={PAGE_SIZE}
                                        pageIndex={this.props.pageIndex}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        leads: state.lead.leadsAfterFilter,
        pageIndex: state.lead.pageIndex
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setPageIndex: (pageNumber) => {
            dispatch(setPageIndex(pageNumber));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeadPage);