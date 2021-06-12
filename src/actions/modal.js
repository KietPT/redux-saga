import * as uiTypes from '../constant/modal'

export const showModal = () => ({
    type: uiTypes.OPEN_MODAL
})

export const hideModal = () => ({
    type: uiTypes.HIDE_MODAL
})

export const changeModalContent = (component) => ({
    type: uiTypes.CHANGE_MODAL_CONTENT,
    payload: {
        component
    }
})

export const changeModalTitle = (title) => ({
    type: uiTypes.CHANGE_MODAL_TITLE,
    payload: {
        title
    }
})