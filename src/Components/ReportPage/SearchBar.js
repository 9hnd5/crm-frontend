import React from 'react';
import moment from 'moment';
import { fetchReportLeadsByDateRequest } from '../../Actions/reportLeadAction';
import { connect } from 'react-redux';
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            from: "",
            to: ""
        }
    }
    handleClickSearch = () => {
        let from = moment(this.state.from, ["DD/MM/YYYY", "D/M/YYYY"], true);
        let to = moment(this.state.to, ["DD/MM/YYYY", "D/M/YYYY"], true);
        if (from.isValid() && to.isValid()) {
            this.props.fetchReportLead(from.format("YYYY/MM/DD"), to.format("YYYY/MM/DD"));
        }
        else {
            
            // this.setState({
            //     from: moment(new Date()).format("D/M/YYYY"),
            //     to: moment(new Date()).format("D/M/YYYY")
            // })
        }
    }
    setFrom = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    setTo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="search-bar">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input onChange={this.setFrom} value={this.state.from} type="text" className="form-control" name="from" placeholder="From" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input onChange={this.setTo} value={this.state.to} type="text" className="form-control" name="to" placeholder="To" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <button onClick={this.handleClickSearch} type="button" className="btn btn-primary">Search</button>
                    </div>

                </div>
            </div>
        );
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchReportLead: (from, to) => {
            dispatch(fetchReportLeadsByDateRequest(from, to));
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchBar);