import { UPDATE_LEAD, FETCH_LEAD, GET_ALL_LEAD } from "../Constants/constants";

let initialState = {
    listLead: []
}
const leadReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LEAD:
            state.listLead = action.payload;
            return {
                ...state
            };
        case GET_ALL_LEAD:
            return {...state}
        case UPDATE_LEAD:
            let {id, newLead} = action.payload;
            let newListLead = state.listLead.map((lead) => {
                if(lead.id === id){
                    return {id, ...newLead};
                }
                return lead;
            });
            return {
                ...state,
                listLead: newListLead
            }         
        default:
            return state;
    }
}
export default leadReducer;