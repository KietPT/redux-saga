import AdminHomePage from "../container/AdminHomePage";
import Taskboard from '../container/Taskboard';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUS = [
    {
        value: 0,
        label: "READY"
    }, {
        value: 1,
        label: "INPROGRESS"
    }, {
        value: 2,
        label: "DONE"
    }
]

export const statusCode = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
}

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/taskboard',
        name: 'Quản lí công việc',
        exact: true,
        component: Taskboard
    }
]