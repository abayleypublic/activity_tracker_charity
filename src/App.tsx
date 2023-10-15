import { SlideFade } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useAPI from './hooks/api'
import Layout from './components/layout'

const transition = {
    enter: { duration: 1.0 },
}

function App() {
    const api = useAPI()
    const challengeID = '652306b1468ca9673f94a940'
    const userID = 'WPhWvqsqa5b9m7JO003A97FPMGo2'
    const [challenge, setChallenge] = useState<Challenge>()
    const [progress, setProgress] = useState<Progress>()

    useEffect(() => {
        api.get<Challenge>(`/challenges/${challengeID}`)
            .then((res) => {
                setChallenge(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        api.get<Progress>(
            `/challenges/${challengeID}/members/${userID}/progress`
        )
            .then((res) => {
                setProgress(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [api, challengeID, userID])

    return (
        <SlideFade in transition={transition}>
            <Layout challenge={challenge} progress={progress} />
        </SlideFade>
    )
}

export default App
