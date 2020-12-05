import { OPEN_MODAL } from "../Constants/constants";

let initialState = {
    isOpenModal: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: action.payload
            };
        default:
            return {...state};
    }
}
export default appReducer;