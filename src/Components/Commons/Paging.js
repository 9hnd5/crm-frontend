import React from 'react';
import { PAGE_PER_TAB } from '../../Constants/constants';
class Paging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
        }
    }
    displayPage = () => {
        // 1 tab = 5 page, tabIndex = 1 ====> 1 2 3 4 5 page, tabIndex = 6 ====> 6 7 8 9 10 page
        let totalPage = this.props.totalRecord/this.props.pageSize;
        let pagePerTab = PAGE_PER_TAB;
        let tabIndex = this.state.position*pagePerTab + 1;
        let result = [];
        let condition = (totalPage - tabIndex)  >= pagePerTab? tabIndex + pagePerTab: totalPage + 1;
        for (let i = tabIndex; i < condition; i++) {
            // eslint-disable-next-line
            result.push(<li className={this.props.pageIndex === i? "active": ""} style={{cursor:"pointer"}} onClick={() => this.handlePageClick(i)} key={i}><a>{i}</a></li>);
        }
        return result;
    }
    handlePageClick = (pageNumber) => {
        this.props.handlePageClick(pageNumber);
    }
    handleNext = () => {
        let newPosition = this.state.position + 1;
        this.setState({
            position: newPosition
        })
    }
    handlePrev = () => {
        let newPosition = this.state.position - 1;
        this.setState({
            position: newPosition
        })
    }
    render() {
        let tabIndex = this.state.position*PAGE_PER_TAB +1;
        let disabled = (tabIndex + PAGE_PER_TAB) > (this.props.totalRecord/this.props.pageSize)? "disabled": "";
        return (
            <ul className="pagination pagination-lg">
                <li className={tabIndex === 1? "disabled": ""} onClick={this.handlePrev}><a>&laquo;</a></li>
                    {this.displayPage()}
                <li className= {disabled} onClick={this.handleNext}><a>&raquo;</a></li>
            </ul>
        );
    }
}
export default Paging;