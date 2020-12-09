import React from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabActive: 1
        }
    }
    handleClick = (tab) => {
        this.setState({
            tabActive: tab
        })
    }
    render() {
        return (
            <div className="row flex">
                <div className="col-md-10">
                    <div className="tab" role="tabpanel">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className={this.state.tabActive === 1? "active": ""} onClick={() => this.handleClick(1)} role="presentation">
                                <NavLink to="/" exact >LEAD PAGE</NavLink>
                            </li>
                            <li className={this.state.tabActive === 2? "active": ""} onClick={() => this.handleClick(2)} role="presentation">
                                <NavLink to="/report" >REPORT PAGE</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu;