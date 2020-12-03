export const openModalAction = (payload) => {
    return {
        type: "OPEN_MODAL",
        payload: payload
    }
}
export const closeModalAction = (payload) => {
    return {
        type: "CLOSE_MODAL",
        payload: payload
    }
}