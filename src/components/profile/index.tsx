import {
    Card,
    VStack,
    Image,
    AspectRatio,
    Heading,
    Box,
} from '@chakra-ui/react'
import profilePic from '../../assets/me.jpeg'
import { motion } from 'framer-motion'

const Profile = () => {
    return (
        <Card as={motion.div}>
            <VStack alignItems={'center'} as={motion.div} layout="position">
                <AspectRatio
                    minW={160}
                    maxW={240}
                    w={'80%'}
                    ratio={1}
                    m={4}
                    as={motion.div}
                    layout="preserve-aspect"
                >
                    <Image
                        borderRadius="full"
                        src={profilePic}
                        alt="Austin Bayley"
                    />
                </AspectRatio>
                <Heading size={'sm'}>Austin Bayley</Heading>
            </VStack>
        </Card>
    )
}

export default Profile
