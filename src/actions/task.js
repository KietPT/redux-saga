import * as taskApi from '../apis/task'
import { STATUS } from '../constant'
import * as constants from '../constant/task'

export const fetchListTask = (params = {}) => {
    return {
        type: constants.FETCH_TASK,
        payload: {
            params,
        }
    }
}

export const fetchListTaskSuccess = data => {
    return {
        type: constants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFail = error => {
    return {
        type: constants.FETCH_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const filterTask = keyword => {
    return {
        type: constants.FILTER_TASK,
        payload: {
            keyword
        }
        
    }
}
export const filterTaskSuccess = data => {
    return {
        type: constants.FILTER_TASK_SUCCESS,
        payload: {
            dataFilter: data
        }
    }
}

export const setTask = task => {
    return {
        type: constants.SET_TASK,
        payload: {
            task
        }
    }
}


export const addTask = (title, description) => {
    return {
        type: constants.ADD_TASK,
        payload: {
            title,
            description
        }
    }
}

export const addTaskSuccess = data => {
    return {
        type: constants.ADD_TASK_SUCCESS,
        payload: {
            taskSucces: data
        }
    }
}

export const addTaskFail = error => {
    return {
        type: constants.ADD_TASK_FAIL,
        payload: {
            errorTask: error
        }
    }
}

export const editTask = (title, description, status = STATUS[0].value) => {
    return {
        type: constants.EDIT_TASK,
        payload: {
            title,
            description, 
            status
        }
    }
}

export const editTaskSuccess = data => {
    return {
        type: constants.EDIT_TASK_SUCCESS,
        payload: {
            taskEditSucces: data
        }
    }
}

export const editTaskFail = error => {
    return {
        type: constants.EDIT_TASK_FAIL,
        payload: {
            errorEditTask: error
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: constants.DELETE_TASK,
        payload: {
            id
        }
    }
}

export const deleteTaskSuccess = id => {
    return {
        type: constants.DELETE_TASK_SUCCESS,
        payload: {
            id
        }
    }
}

export const deleteTaskFail = error => {
    return {
        type: constants.DELETE_TASK_FAIL,
        payload: {
            errorDeleteTask: error
        }
    }
}


/**
 *  b1 gọi fetchListTaskRequest,
 *  b2 reset state tasks = []
 *  b3 fetchListTaskSuccess dispath success truyền vào data  
 *  b4 fetchListTaskError dispath fail truyền vào error
 * @returns 
 */

// export const fetchListTaskRequest = () => {
//     return dispatch => {
//         dispatch(fetchListTask());
//         taskApi
//         .getListTask()
//         .then(res => {
//             const {data} = res;
//             dispatch(fetchListTaskSuccess(data));
//         })
//         .catch(error => {
//             dispatch(fetchListTaskFail(error));
//         })
//     }
// }