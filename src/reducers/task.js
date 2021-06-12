import { toastError, toastSuccess } from '../common/Helper/toastNotify'
import * as types from '../constant/task'


const initState = {
    listTask: [],
    taskEdit: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_TASK:
            return {
                ...state,
                listTask: []
            }
        case types.FETCH_TASK_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                listTask: data
            }
        case types.FETCH_TASK_FAIL:
            const { error } = action.payload;
            toastError(error)
            return {
                ...state,
                listTask: []
            }
        case types.ADD_TASK:
            return {
                ...state,

            }
        case types.ADD_TASK_SUCCESS:
            const { taskSucces } = action.payload
            toastSuccess('Thêm mới công việc thành công')
            return {
                ...state,
                listTask: [taskSucces].concat(state.listTask)
            }
        case types.ADD_TASK_FAIL:
            const { errorTask } = action.payload;
            toastError(errorTask)
            return {
                ...state,
            }
        case types.EDIT_TASK:
            return {
                ...state,

            }
        case types.EDIT_TASK_SUCCESS:
            const { taskEditSucces } = action.payload
            const { listTask } = state
            const index = listTask.findIndex(item => item.id === taskEditSucces.id)
            let newList = []
            if (index !== -1) {
                newList = [
                    ...listTask.slice(0, index), taskEditSucces, ...listTask.slice(index + 1),
                ]
            }
            toastSuccess('Cập nhật công việc thành công')
            return {
                ...state,
                listTask: newList,
            }
        case types.EDIT_TASK_FAIL:
            const { errorEditTask } = action.payload;
            toastError(errorEditTask)
            return {
                ...state,
            }
        case types.FILTER_TASK_SUCCESS:
            const { dataFilter } = action.payload;
            return {
                ...state,
                listTask: dataFilter
            }
        case types.SET_TASK:
            const { task } = action.payload;
            return {
                ...state,
                taskEdit: task
            }
        case types.DELETE_TASK:
            return {
                ...state,

            }
        case types.DELETE_TASK_SUCCESS:
            const { id } = action.payload
            toastSuccess('Xoá công việc thành công')
            return {
                ...state,
                listTask: state.listTask.filter(item => item.id !== id),
            }
        case types.DELETE_TASK_FAIL:
            const { errorDeleteTask } = action.payload;
            toastError(errorDeleteTask)
            return {
                ...state,
            }

        default:
            return state;
    }

}
export default reducer;