import { UPDATE_LEAD_BY_ID, SAVE_LEADS, SET_PAGE_INDEX, FILTER_LEADS } from "../Constants/constants"
import { callApi } from './../Ultils/callApi';
import { setLoadingApp } from "./appActions";

//FOR REDUX STORE
export const updateLeadById = (id, newLead) => {
    return {
        type: UPDATE_LEAD_BY_ID,
        payload: {
            id,
            newLead
        }
    }
}
export const saveLeads = (leads) => {
    return {
        type: SAVE_LEADS,
        payload: leads
    }
}
export const setPageIndex = (pageNumber) => {
    return {
        type: SET_PAGE_INDEX,
        payload: pageNumber
    };
}
export const filterLeads = (filterObject) => {
    return {
        type: FILTER_LEADS,
        payload: filterObject
    };
}

//FOR CALL API
export const updateLeadByIdRequest = (id, newLead) => {
    return async (dispatch) => {
        await callApi(`lead/${id}`, "PUT", newLead)
        dispatch(updateLeadById(id, newLead));
    };
}
export const fetchLeadsRequest = () => {
    return async dispatch => {
        dispatch(setLoadingApp(true));
        let response = await callApi("leads", "GET", null);
        let leads = response.data
        dispatch(saveLeads(leads))
        dispatch(setLoadingApp(false));

    }
}

