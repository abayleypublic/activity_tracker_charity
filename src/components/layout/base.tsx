import { Card, VStack } from '@chakra-ui/react'
import { LayoutProps } from '.'
import ChakraBox from '../chakrabox'
import MapBox from '../../features/challenges/components/mapbox'
import Profile from '../profile'
import Stats from '../../features/challenges/components/stats'
import Footer from '../footer'

export const base = ({ progress, challenge }: LayoutProps) => (
    <VStack p={[2, 4, 8]} gap={4}>
        <Card>
            <ChakraBox layout>
                <Profile />
            </ChakraBox>
        </Card>

        <ChakraBox layout>
            <Card overflow={'clip'} p={0}>
                <MapBox progress={progress} challenge={challenge} />
            </Card>
        </ChakraBox>

        <ChakraBox w="full" layout>
            <Stats progress={progress} challenge={challenge} />
        </ChakraBox>

        <ChakraBox w="full" layout>
            <Footer />
        </ChakraBox>
    </VStack>
)
