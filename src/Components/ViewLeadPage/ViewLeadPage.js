import React from 'react';
import SearchBar from './SearchBar';
import TableLead from './TableLead';
class ViewLeadPage extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <TableLead />
            </div>
        );
    }
}
export default ViewLeadPage;