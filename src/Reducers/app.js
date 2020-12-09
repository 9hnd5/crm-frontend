import { OPEN_MODAL, SET_LOADING_APP } from "../Constants/constants";

let initialState = {
    isModalOpen: false,
    isAppLoading: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: action.payload
            };
        case SET_LOADING_APP:
            return {
                ...state,
                isAppLoading: action.payload
            };
        default:
            return {...state};
    }
}
export default appReducer;