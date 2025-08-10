import { useEffect, useState } from 'react'
import api from '@/features/challenges/api'

const useChallenge = (id: string) => {
    const [challenge, setChallenge] = useState<Challenge>()

    const getChallenge = async () => {
        try {
            const res = await api.getChallenge(id)
            setChallenge(res)
        } catch (err) {
            console.error('failed to get challenge', err)
        }
    }

    useEffect(() => {
        getChallenge()
    }, [api, id])

    return { challenge }
}

export default useChallenge
