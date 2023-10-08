import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
})

const useAPI = () => {
    return instance
}

export default useAPI
