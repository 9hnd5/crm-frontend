import React from 'react';
import SearchBar from './SearchBar';
import TableContent from './TableContent';
class ViewLeadPage extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <TableContent />
            </div>
        );
    }
}
export default ViewLeadPage;