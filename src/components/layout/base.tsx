import { Card, VStack } from '@chakra-ui/react'
import { LayoutProps } from '.'
import ChakraBox from '../chakrabox'
import MapBox from '../mapbox'
import Profile from '../profile'
import Stats from '../stats'
import Footer from '../footer'

export const base: React.FC<LayoutProps> = (props) => (
    <VStack p={[2, 4, 8]} gap={4}>
        <Card>
            <ChakraBox layout>
                <Profile />
            </ChakraBox>
        </Card>

        <ChakraBox layout>
            <Card overflow={'clip'} p={0}>
                <MapBox progress={props.progress} challenge={props.challenge} />
            </Card>
        </ChakraBox>

        <ChakraBox w="full" layout>
            <Stats progress={props.progress} challenge={props.challenge} />
        </ChakraBox>

        <ChakraBox w="full" layout>
            <Footer />
        </ChakraBox>
    </VStack>
)
