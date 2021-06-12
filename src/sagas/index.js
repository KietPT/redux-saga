import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as taskTypes from '../constant/task'
import { addTask, deleteTask, editTask, getListTask } from '../apis/task'
import { statusCode } from '../constant/index'
import { fetchListTaskSuccess, fetchListTaskFail, filterTaskSuccess, 
    addTaskSuccess, addTaskFail, fetchListTask, editTaskSuccess, editTaskFail, deleteTaskSuccess, deleteTaskFail } from '../actions/task'
import { showLoading, hideLoading } from '../actions/ui'
import {STATUS} from '../constant/index'
import { hideModal } from '../actions/modal'

/**
 * B1; thực thi action để lấy danh sách, hiển thị thanh loading
 * B2: gọi api
 * B3: kiểm tra status code, thành công thì làm gì đó
 * 
 */

function* watchFetchListTaskAction() {
    while (true) {
        const action = yield take(taskTypes.FETCH_TASK)
        yield put(showLoading())
        const { params } =action.payload
        const res = yield call(getListTask,params)
        const { status, data } = res
        if (status === statusCode.SUCCESS) {
            yield put(fetchListTaskSuccess(data))
        } else {
            yield put(fetchListTaskFail(data))
        }
        yield delay(1000)
        yield put(hideLoading())
    }

}
function* filterTaskSaga({ payload }) {
    yield delay(500)
    const { keyword } = payload
    yield put(fetchListTask({
        q: keyword
    }))
}

function* addTaskSaga({ payload }) {
    const { title, description } = payload
    yield put(showLoading())
    const res = yield call(addTask, {
        title,
        description,
        status: STATUS[0].value
    })
    const { status, data } = res
    if (status === statusCode.CREATED) {
        yield put(addTaskSuccess(data))
        yield put(hideModal())
    } else {
        yield put(addTaskFail(data))
    }
    yield delay(1000)
    yield put(hideLoading())
}

function* editTaskSaga({payload}){
    const { title, description, status} = payload
    const taskEdit = yield select(state => state.task.taskEdit)
    yield put(showLoading())
    const res = yield call(editTask, {
        title,
        description,
        status
    }, taskEdit.id)
    const { status: statusEdit, data } = res
    if (statusEdit === statusCode.SUCCESS) {
        yield put(editTaskSuccess(data))
        yield put(hideModal())
    } else {
        yield put(editTaskFail(data))
    }
    yield delay(1000)
    yield put(hideLoading())
}

function* deleteTaskSaga({payload}){
    const { id } = payload
    
    yield put(showLoading())
    const res = yield call(deleteTask, id)
    const { status: statusDelete, data } = res
    if (statusDelete === statusCode.SUCCESS) {
        yield put(deleteTaskSuccess(id))
        yield put(hideModal())
    } else {
        yield put(deleteTaskFail(data))
    }
    yield delay(1000)
    yield put(hideLoading())
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction)
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga)
    yield takeLatest(taskTypes.ADD_TASK, addTaskSaga)
    yield takeLatest(taskTypes.EDIT_TASK, editTaskSaga)
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}


export default rootSaga;