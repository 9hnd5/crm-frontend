import leadReducer from './lead';
import { combineReducers } from 'redux';
import appReducer from './app';
const rootReducer = combineReducers({
    lead: leadReducer,
    app: appReducer
});
export default rootReducer;