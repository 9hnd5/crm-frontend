export const displayAllLead = () => {
    return {
        type: "DISPLAY_ALL_LEAD",
    }
}
export const setLeadNeedToEditAction = (lead) => {
    return {
        type: "SET_LEAD_NEED_TO_EDIT",
        payload: lead
    }
}
export const editLeadAction = (lead) => {
    return {
        type: "EDIT_LEAD",
        payload: lead
    }
}