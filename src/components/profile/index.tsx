import {
    Card,
    VStack,
    Image,
    AspectRatio,
    Heading,
    Button,
    Link,
    HStack,
    IconButton,
    useColorMode,
} from '@chakra-ui/react'
import profilePic from '../../assets/me.jpeg'
import { motion } from 'framer-motion'
import { FaInstagram, FaMoneyBill, FaStrava } from 'react-icons/fa'

const Profile = () => {
    return (
        <Card as={motion.div}>
            <VStack alignItems={'center'} as={motion.div} layout="position">
                <AspectRatio minW={160} maxW={200} w={'80%'} ratio={1} mt={4}>
                    <Image
                        border={'2px solid'}
                        borderRadius="full"
                        src={profilePic}
                        alt="Austin Bayley"
                        boxShadow={'lg'}
                    />
                </AspectRatio>

                <VStack>
                    <Heading size={'xl'} textAlign={'center'}>
                        Austin Runs to Rome
                    </Heading>
                    <HStack>
                        <Link href={'https://google.com'} isExternal>
                            <Button
                                colorScheme="purple"
                                style={{ textDecoration: 'none' }}
                                leftIcon={<FaMoneyBill />}
                            >
                                Donate!
                            </Button>
                        </Link>
                        <Link isExternal>
                            <IconButton
                                icon={<FaInstagram />}
                                aria-label={'Instagram'}
                            />
                        </Link>
                        <Link isExternal>
                            <IconButton
                                icon={<FaStrava />}
                                aria-label={'Strava'}
                            />
                        </Link>
                    </HStack>
                </VStack>
            </VStack>
        </Card>
    )
}

export default Profile
