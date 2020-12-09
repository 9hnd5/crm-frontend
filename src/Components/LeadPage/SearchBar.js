import React from 'react';
import { connect } from 'react-redux';
import { filterLeads, setPageIndex } from '../../Actions/leadsActions';
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeOut: 0
        }
    }
    handleChange = (event) => {
        let filterObject = {
            filterKey: event.target.name,
            filterValue: event.target.value
        }
        this.props.filterLeads(filterObject);
        this.props.setPageIndex(1);
    }
    render() {
        let { filterKey, filterValue } = this.props;
        let valueFilterByName = "";
        let valueFilterBySource = "";
        let valueFilterByStatus = ""
        switch (filterKey) {
            case "filterByName":
                valueFilterByName = filterValue;
                break;
            case "filterBySource":
                valueFilterBySource = filterValue;
                break;
            default:
                valueFilterByStatus = filterValue;
        }
        return (
            <div className="search-bar">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input value={valueFilterByName} onChange={this.handleChange} type="text" className="form-control" name="filterByName" placeholder="Search By Name" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input value={valueFilterBySource} onChange={this.handleChange} type="text" className="form-control" name="filterBySource" placeholder="Search By Source" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <select value={valueFilterByStatus} name="filterByStatus" onChange={this.handleChange} className="form-control">
                                <option value="">--Search By Status--</option>
                                <option value="New">New</option>
                                <option value="Do not call">Do not call</option>
                                <option value="Not interested in our Services">Not interested in our Services</option>
                                <option value="Rented Properties">Rented Properties</option>
                                <option value="Looking for Rental">Looking for Rental</option>
                            </select>
                            <span onClick={this.handleClickSearch} className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        filterLeads: (filterObject) => {
            dispatch(filterLeads(filterObject));
        },
        setPageIndex: (pageNumber) => {
            dispatch(setPageIndex(pageNumber))
        }
    }
};
const mapStateToProps = state => {
    return {
        filterKey: state.lead.filterKey,
        filterValue: state.lead.filterValue
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);