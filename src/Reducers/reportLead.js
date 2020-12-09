const { SAVE_REPORT_LEADS_BY_STATUS, SAVE_REPORT_LEADS_BY_DATE } = require("../Constants/constants")

let initialState = {
    reportLeadsByStatus: [],
    reportLeadsByDate: []
}

const reportLeadReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_REPORT_LEADS_BY_STATUS:
            return {
                ...state,
                reportLeadsByStatus: action.payload
            };
        case SAVE_REPORT_LEADS_BY_DATE:
            return {
                ...state,
                reportLeadsByDate: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
export default reportLeadReducer;