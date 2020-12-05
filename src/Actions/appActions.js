import { OPEN_MODAL } from "../Constants/constants"

export const openModalAction = (payload) => {
    return {
        type: OPEN_MODAL,
        payload: payload
    }
}