import { OPEN_MODAL, SET_LOADING_APP } from "../Constants/constants"

//FOR REDUX STORE
export const openModalAction = (payload) => {
    return {
        type: OPEN_MODAL,
        payload: payload
    }
}
export const setLoadingApp = (isLoading) => {
    return {
        type: SET_LOADING_APP,
        payload: isLoading
    }
}