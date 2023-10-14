import { Box, Card, Center, HStack, SlideFade, VStack } from '@chakra-ui/react'
import Map from './components/map'
import Profile from './components/profile'
import Stats from './components/stats'
import { LayoutGroup, motion } from 'framer-motion'

function App() {
    // const width = useBreakpointValue({ base: '100%', md: '50%' })
    // console.log(width)

    return (
        <Center w={'100vw'} minH={'100vh'} alignItems={'start'}>
            <HStack alignItems={'start'} maxW={'container.lg'} w="100%">
                <LayoutGroup>
                    <VStack>
                        <SlideFade
                            in
                            transition={{
                                enter: { duration: 1.0 },
                            }}
                        >
                            <Box flex="1">
                                <Card borderRadius={32} overflow={'clip'} p={0}>
                                    <Map
                                        w={[300, 400, 300]}
                                        h={[300, 400, 400]}
                                        eW={[300, 600, 600]}
                                        eH={[300, 500, 700]}
                                    />
                                </Card>
                            </Box>
                        </SlideFade>
                        <Stats />
                    </VStack>
                    <Box flex="3">
                        <Profile />
                    </Box>
                </LayoutGroup>
            </HStack>
        </Center>
    )
}

export default App
