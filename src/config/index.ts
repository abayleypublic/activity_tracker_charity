import axios from 'axios'

const Config = {
    challengeID: '652306b1468ca9673f94a940',
    userID: 'WPhWvqsqa5b9m7JO003A97FPMGo2',

    api: axios.create({
        baseURL: '/api',
        timeout: 5000,
    }),
}

export default Config
