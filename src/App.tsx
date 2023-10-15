import { Card, Center, HStack, SlideFade, VStack } from '@chakra-ui/react'
import Profile from './components/profile'
import Stats from './components/stats'
import { LayoutGroup } from 'framer-motion'
import { useEffect, useState } from 'react'
import useAPI from './hooks/api'
import ChakraBox from './components/chakrabox'
import MapBox from './components/mapbox'

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
            <Center w={'100vw'} minH={'100vh'} alignItems={'start'} p={8}>
                <HStack alignItems={'start'} maxW={'container.lg'} w="100%">
                    <LayoutGroup>
                        <VStack>
                            <ChakraBox flex="1" layout>
                                <Card overflow={'clip'} p={0}>
                                    <MapBox />
                                </Card>
                            </ChakraBox>

                            <ChakraBox w="full" layout>
                                <Stats
                                    progress={progress}
                                    challenge={challenge}
                                />
                            </ChakraBox>
                        </VStack>
                        <ChakraBox flex="3" layout>
                            <Profile />
                        </ChakraBox>
                    </LayoutGroup>
                </HStack>
            </Center>
        </SlideFade>
    )
}

export default App
