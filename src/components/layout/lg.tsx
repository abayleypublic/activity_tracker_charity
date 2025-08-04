import { Center, HStack, VStack, Card } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import ChakraBox from '../chakrabox'
import MapBox from '../../features/challenges/components/mapbox'
import Profile from '../profile'
import Stats from '../../features/challenges/components/stats'
import { LayoutProps } from '.'
import Footer from '../footer'

export const lg = ({ progress, challenge }: LayoutProps) => (
    <Center w={'100vw'} alignItems={'start'} py={8}>
        <LayoutGroup>
            <HStack
                alignItems={'start'}
                maxW={'container.lg'}
                w={'100%'}
                h={'100%'}
            >
                <VStack position={'sticky'} top={4}>
                    <ChakraBox layout>
                        <Card overflow={'clip'} p={0}>
                            <MapBox progress={progress} challenge={challenge} />
                        </Card>
                    </ChakraBox>

                    <ChakraBox w="full" layout>
                        <Stats progress={progress} challenge={challenge} />
                    </ChakraBox>

                    <ChakraBox bottom={0} h={'full'} w={'full'} layout>
                        <Footer />
                    </ChakraBox>
                </VStack>
                <Card overflow={'auto'} h={'100%'}>
                    <ChakraBox layout>
                        <Profile />
                    </ChakraBox>
                </Card>
            </HStack>
        </LayoutGroup>
    </Center>
)
