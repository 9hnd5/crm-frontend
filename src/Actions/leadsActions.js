import { UPDATE_LEAD, GET_ALL_LEAD, FETCH_LEAD, API_URL } from "../Constants/constants"
import { callApi } from './../Ultils/callApi';

export const displayAllLead = () => {
    return {
        type: GET_ALL_LEAD,
    }
}
export const updateLeadAction = (id, newLead) => {
    return {
        type: UPDATE_LEAD,
        payload: {
            id,
            newLead
        }
    }
}
export const fetchLeadAction = (leads) => {
    return {
        type: FETCH_LEAD,
        payload: leads
    }
}
export const fetchLeadRequestAction = () => {
    return (dispatch) => {
        return callApi("lead", "GET", null).then((response) => {
            dispatch(fetchLeadAction(response.data));
        });
    }
}
export const updateLeadRequestAction = (id, newLead) => {
    return (dispatch) => {
        return callApi(`lead/${id}`, "PUT", newLead).then((response) => {
            dispatch(updateLeadAction(id, newLead));
        });
    };
}