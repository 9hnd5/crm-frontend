import React from 'react';
import { connect } from 'react-redux';
import { displayAllLead } from '../../Actions/leadsActions';
import RowContent from './RowContent';
class TableContent extends React.Component {
    displayLead = () =>{
        let result = this.props.getAllLead.map(function(lead, index){
            return(
                <RowContent key={index} lead={lead} />
            )
        }) || [];
        return result;
    }
    render() {
        return (
            <div className="container-fluid">
                <table className="table table-hover">
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
                        {this.displayLead()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export const mapStateToProps = (state) => {
    return{
        getAllLead: state.lead.listLead
    }
}
export const mapDispatchToProps = (dispatch) =>{
    return{
        displayAllLead: () => {
            dispatch(displayAllLead());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContent);