import axios from 'axios'

interface RuntimeConfig {
    API_URL: string
}

async function getConfig(): Promise<RuntimeConfig> {
    const res = await fetch('/config.json', { cache: 'no-store' })
    return await res.json()
}

const cfg = await getConfig()

const Config = {
    challengeID: '652306b1468ca9673f94a940',
    userID: 'WPhWvqsqa5b9m7JO003A97FPMGo2',

    api: axios.create({
        baseURL: cfg.API_URL,
        timeout: 5000,
        withCredentials: true,
    }),
}

export default Config
