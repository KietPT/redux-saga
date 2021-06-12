import axiosService from '../common/axiosService'
import {API_ENDPOINT} from '../constant/index'
import qs from 'query-string'
const url = 'tasks';

export const getListTask = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`
    } 
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
}

export const addTask = (body) => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, body)
}

export const editTask = (body, id) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, body)
}

export const deleteTask = (id) => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`)
}
