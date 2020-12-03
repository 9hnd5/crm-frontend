let initialState = {
    listLead: [
        {
            id: 1,
            firstName: "Nguyen",
            lastName: "Huy",
            email: "ng.d.huy95@gmail.com",
            phone: "0931335283",
            source: "zip",
            status: "Do not call",
            createDate: "20/10/2020",
            updateDate: "21/10/2020"
        },
        {
            id: 2,
            firstName: "Nguyen",
            lastName: "Hoa",
            email: "zunahoa@gmail.com",
            phone: "0932545235",
            source: "zip",
            status: "Looking for Rental",
            createDate: "1/10/2020",
            updateDate: "11/10/2020"
        }
    ],
    leadNeedToEdit: {}
}
const leadReducer = (state = initialState, action) => {
    switch(action.type){
        case "DISPLAY_ALL_LEAD":
            return {...state}
        case "EDIT_LEAD":
            console.log("payload", action.payload);
            let newLead = action.payload;
            let index = state.listLead.findIndex(function(lead){
                return lead.id === newLead.id
            });
            let newListLead = state.listLead.map((lead) => {
                if(lead.id === newLead.id){
                    return lead = newLead;
                }
                return lead;
            });
            console.log("asdasd", newListLead, index);
            return {
                ...state,
                listLead: newListLead
            }
        case "SET_LEAD_NEED_TO_EDIT":
            let idLeadNeedToEdit = action.payload.id
            let leadNeedToEdit = state.listLead.find(function(lead){
                return lead.id === idLeadNeedToEdit;
            }); 
            console.log("leadNeedToEdit", leadNeedToEdit);
            return {
                ...state,
                leadNeedToEdit
            }           
        default:
            return state;
    }
}
export default leadReducer;