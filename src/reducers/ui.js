import * as types from '../constant/ui'

const initState = {
    showLoading: false,
    isShowSidebar: true
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }
        case types.SHOW_SIDEBAR:
            return {
                ...state,
                isShowSidebar: true
            }
        case types.HIDE_SIDEBAR:
            return {
                ...state,
                isShowSidebar: false
            }

        default:
            return state
    }
}
export default reducer;