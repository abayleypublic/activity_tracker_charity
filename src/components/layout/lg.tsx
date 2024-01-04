import { Center, HStack, VStack, Card } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import ChakraBox from '../chakrabox'
import MapBox from '../mapbox'
import Profile from '../profile'
import Stats from '../stats'
import { LayoutProps } from '.'
import Footer from '../footer'

export const lg: React.FC<LayoutProps> = (props) => (
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
                            <MapBox
                                progress={props.progress}
                                challenge={props.challenge}
                            />
                        </Card>
                    </ChakraBox>

                    <ChakraBox w="full" layout>
                        <Stats
                            progress={props.progress}
                            challenge={props.challenge}
                        />
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
