import { AxiosInstance } from 'axios'

class API {
    constructor(readonly api: AxiosInstance) {}

    /**
     * getChallenge gets the challenge data for a given challenge ID.
     * @param challengeID the ID of the challenge to retrieve
     * @returns a Promise that resolves to the Challenge data
     */
    async getChallenge(challengeID: string): Promise<Challenge> {
        const res = await this.api.get<Challenge>(`/challenges/${challengeID}`)
        return res.data
    }

    /**
     * getProgress retrieves the progress of a user in a specific challenge.
     * @param challengeID the ID of the challenge to retrieve progress for
     * @param userID the ID of the user to retrieve progress for
     * @returns a Promise that resolves to the Progress data
     */
    async getProgress(challengeID: string, userID: string): Promise<Progress> {
        const res = await this.api.get<Progress>(
            `/challenges/${challengeID}/members/${userID}/progress`
        )
        return res.data
    }
}

export default API
