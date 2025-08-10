import { useEffect, useState } from 'react'
import api from '@/features/challenges/api'

const useProgress = (challenge: string, user: string) => {
    const [progress, setProgress] = useState<Progress>()

    const getProgress = async () => {
        try {
            const res = await api.getProgress(challenge, user)
            setProgress(res)
        } catch (err) {
            console.error('failed to get progress', err)
        }
    }

    useEffect(() => {
        getProgress()
    }, [api, challenge, user])

    return { progress }
}

export default useProgress
