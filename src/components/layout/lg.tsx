import { Center, HStack, VStack, Card } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import ChakraBox from '../chakrabox'
import MapBox from '../mapbox'
import Profile from '../profile'
import Stats from '../stats'
import { LayoutProps } from '.'

export const lg: React.FC<LayoutProps> = (props) => (
    <Center w={'100vw'} h={'100vh'} alignItems={'start'} p={8}>
        <LayoutGroup>
            <HStack
                alignItems={'start'}
                maxW={'container.lg'}
                w={'100%'}
                h={'100%'}
            >
                <VStack>
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
