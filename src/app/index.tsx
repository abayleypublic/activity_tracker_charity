import {
    Center,
    Flex,
    Grid,
    GridItem,
    HStack,
    SlideFade,
    Spacer,
    Spinner,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import Policy from '@/features/policy/components/policy'
import ChakraBox from '@/components/chakrabox'
import Config from '@/config'
import usePolicy from '@/features/policy/hooks/use-policy'
import { PolicyAcknowledgement } from '@/features/policy/types'
import useChallenge from '@/features/challenges/hooks/use-challenge'
import useProgress from '@/features/challenges/hooks/use-progress'
import Footer from '@/features/layout/components/footer'
import MapBox from '@/features/challenges/components/mapbox'
import Stats from '@/features/challenges/components/stats'
import Profile from '@/components/profile'

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

const App = () => {
    const { challengeID, userID } = Config
    const { challenge } = useChallenge(challengeID)
    const { progress } = useProgress(challengeID, userID)
    const [ack] = usePolicy()

    const bg = useColorModeValue('blue.200', 'blue.600')

    const layout = useBreakpointValue(
        {
            base: `
                "profile"
                "map"
            `,
            lg: `
                "map profile"
            `,
        },
        {
            ssr: false,
        }
    )

    return (
        <SlideFade in transition={transition}>
            <Center>
                <Flex maxW={'container.lg'} m={2}>
                    <Grid
                        templateRows={'1fr auto'}
                        minH={'100dvh'}
                        gap={2}
                        alignItems={'center'}
                    >
                        {!challenge ||
                            (!progress && (
                                <Center>
                                    <Spinner />
                                </Center>
                            ))}
                        {challenge && progress && (
                            <Grid templateAreas={layout}>
                                <GridItem area={'map'}>
                                    <VStack gap={2}>
                                        <MapBox
                                            progress={progress}
                                            challenge={challenge}
                                        />
                                        <Stats
                                            progress={progress}
                                            challenge={challenge}
                                        />
                                    </VStack>
                                </GridItem>
                                <GridItem area={'profile'}>
                                    <Profile />
                                </GridItem>
                            </Grid>
                        )}

                        <GridItem>
                            <Footer />
                        </GridItem>
                    </Grid>
                </Flex>
            </Center>

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
    )
}

export default App
