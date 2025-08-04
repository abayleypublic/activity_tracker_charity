import axios from 'axios'
import {
    Box,
    Flex,
    HStack,
    SlideFade,
    Spacer,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import Policy from '@/features/policy/components/policy'
import ChakraBox from '@/components/chakrabox'
import Provider from '@/app/provider'
import Config from '@/config'
import usePolicy from '@/features/policy/hooks/use-policy'
import { PolicyAcknowledgement } from '@/features/policy/types'

const transition = {
    enter: { duration: 1.0 },
}

const PolicyDisplay = () => (
    <ChakraBox layout w="full">
        <HStack maxW={'container.lg'} margin={'0 auto'} px={2}>
            <Text textAlign={'center'}>Privacy Notice</Text>
            <Spacer />
            <Policy />
        </HStack>
    </ChakraBox>
)

function App() {
    const api = axios.create({
        baseURL: '/',
        timeout: 5000,
    })
    const { challengeID, userID } = Config
    const [challenge, setChallenge] = useState<Challenge>()
    const [progress, setProgress] = useState<Progress>()
    const [ack] = usePolicy()

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

    const bg = useColorModeValue('blue.200', 'blue.600')

    return (
        <Provider>
            <Box minH={'100vh'} p={0}>
                <SlideFade in transition={transition}>
                    <Layout challenge={challenge} progress={progress} />
                    {ack != PolicyAcknowledgement.Yes && (
                        <Flex
                            zIndex={1000}
                            bottom={0}
                            position={'sticky'}
                            w={'full'}
                            backgroundColor={bg}
                            py={1}
                        >
                            <PolicyDisplay />
                        </Flex>
                    )}
                </SlideFade>
            </Box>
        </Provider>
    )
}

export default App
