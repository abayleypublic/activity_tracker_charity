import { Card, Heading, VStack } from '@chakra-ui/react'

const Stats = () => {
    return (
        <Card w={'full'} h={'full'} p={2}>
            <VStack alignItems={'center'}>
                <Heading size="md">Stats</Heading>
            </VStack>
        </Card>
    )
}

export default Stats
