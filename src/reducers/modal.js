import * as types from '../constant/modal'


const initState = {
    showModal: false,
    component: null,
    title: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return {
                ...state,
                showModal: true
            }
        case types.HIDE_MODAL:
            return {
                ...state,
                title: '',
                component: null,
                showModal: false
            }
        case types.CHANGE_MODAL_TITLE:
            const { title } = action.payload
            return {
                ...state,
                title: title
            }
        case types.CHANGE_MODAL_CONTENT:
            const { component } = action.payload
            return {
                ...state,
                component: component
            }

        default:
            return state;
    }

}
export default reducer;