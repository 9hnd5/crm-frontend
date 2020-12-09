import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import LeadPage from './Components/LeadPage/LeadPage';
import ReportPage from './Components/ReportPage/ReportPage';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import './App.css'
import { fetchLeadsRequest } from './Actions/leadsActions';
import loadingIcon from './Assets/loading.gif';

ReactModal.setAppElement('#root');
class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchLeads();
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className={this.props.isAppLoading? "loading": "not-loading"} >
            <img src={loadingIcon} alt="Loading Icon" />
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={LeadPage} />
              <Route path="/report" component={ReportPage} />
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAppLoading: state.app.isAppLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeads: () => {
      dispatch(fetchLeadsRequest());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
