import axios from 'axios'

const Config = {
    challengeID: '652306b1468ca9673f94a940',
    userID: 'WPhWvqsqa5b9m7JO003A97FPMGo2',

    api: axios.create({
        baseURL: import.meta.env.VITE_API_URL ?? '/api',
        timeout: 5000,
        withCredentials: true,
    }),
}

export default Config
