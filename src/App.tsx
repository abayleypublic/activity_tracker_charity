import { Flex, HStack, SlideFade, Spacer, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useAPI from './hooks/api'
import Layout from './components/layout'
import Policy, {
    PolicyAcknowledgement,
    PolicyKey,
} from './components/footer/policy'
import { useLocalStorage } from './hooks/useStorage'
import ChakraBox from './components/chakrabox'

const transition = {
    enter: { duration: 1.0 },
}

const PolicyDisplay = () => {
    return (
        <ChakraBox layout w="full">
            <HStack maxW={'container.lg'} margin={'0 auto'} px={2}>
                <Text maxW={'container.lg'} textAlign={'center'}>
                    Privacy Policy: functional cookies, logging, etc. {'-->'}
                </Text>
                <Spacer />
                <Policy />
            </HStack>
        </ChakraBox>
    )
}

function App() {
    const api = useAPI()
    const challengeID = '652306b1468ca9673f94a940'
    const userID = 'WPhWvqsqa5b9m7JO003A97FPMGo2'
    const [challenge, setChallenge] = useState<Challenge>()
    const [progress, setProgress] = useState<Progress>()
    const { value: ack } = useLocalStorage(PolicyKey)

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
            {ack != PolicyAcknowledgement.Yes && (
                <Flex
                    zIndex={1000}
                    bottom={0}
                    position={'sticky'}
                    w={'full'}
                    backgroundColor={'blue.700'}
                    py={1}
                >
                    <PolicyDisplay />
                </Flex>
            )}
        </SlideFade>
    )
}

export default App
