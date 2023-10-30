import {
    VStack,
    Image,
    AspectRatio,
    Heading,
    Button,
    Link,
    HStack,
    IconButton,
    Text,
    Box,
    Divider,
} from '@chakra-ui/react'
import profilePic from '../../assets/me.jpeg'
import { motion } from 'framer-motion'
import { FaInstagram, FaMoneyBill, FaStrava } from 'react-icons/fa'

const Profile = () => {
    return (
        <Box as={motion.div}>
            <VStack
                alignItems={'center'}
                as={motion.div}
                layout="position"
                p={4}
            >
                <AspectRatio minW={160} maxW={200} w={'80%'} ratio={1} mt={4}>
                    <Image
                        border={'2px solid'}
                        borderRadius="full"
                        src={profilePic}
                        alt="Austin Bayley"
                        boxShadow={'lg'}
                    />
                </AspectRatio>

                <Heading size={'xl'} textAlign={'center'}>
                    Austin's Roam to Rome
                </Heading>
                <HStack>
                    <Link href={'https://google.com'} isExternal>
                        <Button
                            colorScheme="green"
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
                        <IconButton icon={<FaStrava />} aria-label={'Strava'} />
                    </Link>
                </HStack>

                <Divider p={2} />

                <Text as={'p'}>
                    Hello and welcome to my foolish endeavour! Over the course
                    of the next year I am planning to run the distance from
                    Buckingham Palace to the Colosseum in Rome to raise money
                    for Mind, the mental health charity. Why those locations?
                    Mainly because I'm based near London, it seems a challenging
                    distance for me & I like the alliteration!
                </Text>

                <Text>
                    The bigger question - why Mind? Mental health is so
                    important. It's something that impacts us all & I know
                    negative mental health has impacted me in the past so it's
                    something close to my heart. It's so important to have
                    organisations out there that can provide resources and
                    support to those that need it. In the case of Mind, I've
                    seen everything from resources to help you understand the
                    different ways you might be feeling{' '}
                    <Link
                        isExternal
                        href={
                            'https://www.mind.org.uk/information-support/types-of-mental-health-problems/'
                        }
                    >
                        (link)
                    </Link>{' '}
                    to finding professional help{' '}
                    <Link
                        isExternal
                        href={
                            'https://www.mind.org.uk/information-support/drugs-and-treatments/talking-therapy-and-counselling/how-to-find-a-therapist/'
                        }
                    >
                        (link)
                    </Link>{' '}
                    to learning how to help someone else{' '}
                    <Link
                        isExternal
                        href={
                            'https://www.mind.org.uk/information-support/helping-someone-else/'
                        }
                    >
                        (link)
                    </Link>
                    .
                </Text>

                <Text>
                    The other side to this challenge is that I hope it can
                    improve my own mental health! I recently heard mental
                    resilience described as elasticity in the mental muscle. I
                    think at this point I can admit my brain is about as elastic
                    as a slice of cheese (think crumbly cheddar) but I know that
                    getting out into nature & putting one foot in front of the
                    other a little faster than normal can help me see the world
                    in a more positive light. This gives me a reason to commit
                    to doing that more often whilst also feeling good about
                    doing some good too.
                </Text>

                <Text>
                    Anyways, thank you very much for reading. Don't expect
                    running speeds to be great as I am not a good runner but
                    please do donate, follow along on socials, check back here
                    to see my progress on the map & reach out if you fancy a run
                    because I have a feeling this will be more fun with friends
                    :D
                </Text>
            </VStack>
        </Box>
    )
}

export default Profile
