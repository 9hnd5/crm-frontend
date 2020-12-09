import { SAVE_REPORT_LEADS_BY_STATUS, SAVE_REPORT_LEADS_BY_DATE } from "../Constants/constants";
import {callApi} from './../Ultils/callApi';

// FOR REDUX STORE
export const saveReportLeadsByStatus = (reportLeads) => {
    return {
        type: SAVE_REPORT_LEADS_BY_STATUS,
        payload: reportLeads
    }
}
export const saveReportLeadsByDate = (reportLeads) => {
    return {
        type: SAVE_REPORT_LEADS_BY_DATE,
        payload: reportLeads
    };
}

//FOR REQUEST API
export const fetchReportLeadByStatusRequest = () => {
    return (dispatch) => {
        return callApi("lead/report", "GET", null).then((response) => {
            dispatch(saveReportLeadsByStatus(response.data));
        });
    }
}
export const fetchReportLeadsByDateRequest = (from, to) => {
    return async dispatch => {
        let data = {
            from,
            to
        }
        let response = await callApi("lead/report", "POST", data);
        dispatch(saveReportLeadsByDate(response.data));
    };
}