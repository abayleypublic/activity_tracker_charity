import { Card, HStack, Spacer } from '@chakra-ui/react'
import { lazy } from 'react'

const Licenses = lazy(() => import('./licenses'))

const Footer = () => {
    return (
        <Card w={'full'} h={'full'} p={2}>
            <HStack>
                <Spacer />
                <Licenses />
            </HStack>
        </Card>
    )
}

export default Footer
