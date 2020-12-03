let initialState = {
    modalIsOpen: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case "OPEN_MODAL":
            state.modalIsOpen = action.payload
            return {...state};
        case "CLOSE_MODAL":
            state.modalIsOpen = action.payload
            return {...state};
        default:
            return {...state};
    }
}
export default appReducer;