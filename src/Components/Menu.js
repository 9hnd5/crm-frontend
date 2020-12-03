import React from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/" exact={true} > LEADS PAGE </NavLink>
                        </li>
                        <li>
                            <NavLink to="/report" > REPORT PAGE </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}
export default Menu;