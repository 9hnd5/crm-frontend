import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import ViewLeadPage from './Components/ViewLeadPage/ViewLeadPage';
import ViewReportPage from './Components/ViewReportPage/ViewReportPage';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import './App.css'
ReactModal.setAppElement('#root');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="menu">
            <Menu />
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={ViewLeadPage} />
              <Route path="/report" component={ViewReportPage} />
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
