import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

const useAPI = () => {
    return instance
}

export default useAPI
