import {
    Box,
    Card,
    Center,
    HStack,
    SlideFade,
    VStack,
    chakra,
    shouldForwardProp,
} from '@chakra-ui/react'
import Map from './components/map'
import Profile from './components/profile'
import Stats from './components/stats'
import { LayoutGroup, isValidMotionProp, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useAPI from './hooks/api'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MapBox = () => {
    const [expanded, setExpanded] = useState(false)
    const toggleMap = () => {
        setExpanded(!expanded)
    }

    const baseWidth = { base: 300, sm: 400, lg: 300 }
    const baseHeight = { base: 300, sm: 400, lg: 500 }
    const expandedWidth = { base: 300, sm: 400, lg: 600 }
    const expandedHeight = { base: 300, sm: 400, lg: 700 }

    return (
        <ChakraBox
            w={expanded ? expandedWidth : baseWidth}
            h={expanded ? expandedHeight : baseHeight}
            layout
        >
            <Map toggleMap={toggleMap} />
        </ChakraBox>
    )
}

function App() {
    const api = useAPI()

    useEffect(() => {
        api.get('/health')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const transition = {
        enter: { duration: 1.0 },
    }

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
                                <Stats />
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
