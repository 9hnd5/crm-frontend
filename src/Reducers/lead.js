import { UPDATE_LEAD_BY_ID, SAVE_LEADS, SET_PAGE_INDEX, FILTER_LEADS } from "../Constants/constants";

let initialState = {
    leads: [],
    pageIndex: 1,
    leadsAfterFilter: [],
    filterKey: "",
    filterValue: ""
}
const leadReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_LEADS:
            let { filterKey, filterValue } = action.payload;
            let originalLeads = state.leads;
            let leadsAfterFilter = null
            if (filterKey && filterValue) {
                if (filterKey === "filterByName") {
                    leadsAfterFilter = originalLeads.filter((lead) => {
                        return lead.firstName.toLowerCase() === filterValue.toLowerCase() || lead.lastName.toLowerCase() === filterValue.toLowerCase()
                    });
                } else if (filterKey === "filterBySource") {
                    leadsAfterFilter = originalLeads.filter((lead) => {
                        return lead.source.toLowerCase() === filterValue.toLowerCase();
                    });
                } else {
                    leadsAfterFilter = originalLeads.filter((lead) => {
                        return lead.status.toLowerCase() === filterValue.toLowerCase();
                    });
                }
            }
            else{
                leadsAfterFilter = originalLeads;
            }
            return {
                ...state,
                leadsAfterFilter: leadsAfterFilter,
                filterKey: filterKey,
                filterValue: filterValue
            };
        case SET_PAGE_INDEX:
            return {
                ...state,
                pageIndex: action.payload
            };
        case SAVE_LEADS:
            return {
                ...state,
                leads: action.payload,
                leadsAfterFilter: action.payload
            };
        case UPDATE_LEAD_BY_ID:
            let { id, newLead } = action.payload;
            let newLeads = state.leads.map((lead) => {
                if (lead.id === id) {
                    return { id, ...newLead };
                }
                return lead;
            });
            let newLeadsAfterFilter = state.leadsAfterFilter.map((lead) => {
                if (lead.id === id) {
                    return { id, ...newLead };
                }
                return lead;
            });
            return {
                ...state,
                leads: newLeads,
                leadsAfterFilter: newLeadsAfterFilter
            };
        default:
            return { ...state };
    }
}
export default leadReducer;