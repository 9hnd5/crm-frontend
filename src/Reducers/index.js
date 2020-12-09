import leadReducer from './lead';
import { combineReducers } from 'redux';
import appReducer from './app';
import reportLeadReducer from './reportLead';
const rootReducer = combineReducers({
    lead: leadReducer,
    app: appReducer,
    reportLead: reportLeadReducer
});
export default rootReducer;