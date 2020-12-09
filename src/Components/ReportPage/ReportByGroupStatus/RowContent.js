import React from 'react'
class RowContent extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.dataRow.Key}</td>
                <td>{this.props.dataRow.Value}</td>
            </tr>
        );
    }
}
export default RowContent;