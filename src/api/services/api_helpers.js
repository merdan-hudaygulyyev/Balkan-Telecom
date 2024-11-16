import {axiosInstance} from '../axiosInstance'
export const RegisterFN = async (data) => {
    return axiosInstance.post('/register', data).then(respone => respone.data)
}
export const LoginFN = async (data) => {
    return axiosInstance.post('/login', data).then(respone => respone.data)
}