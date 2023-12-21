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
    Tooltip,
    UnorderedList,
    ListItem,
    Spacer,
    useColorModeValue,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react'
import profilePic from '../../assets/me.jpeg'
import { motion } from 'framer-motion'
import { FaFlickr, FaMoneyBill, FaStrava } from 'react-icons/fa'

const Profile = () => {
    const linkColour = useColorModeValue('blue.600', 'blue.300')

    return (
        <Box as={motion.div}>
            <VStack
                alignItems={'center'}
                as={motion.div}
                layout="position"
                p={4}
            >
                <HStack w="full" alignItems={'center'} p={0}>
                    <Spacer />
                    <AspectRatio
                        minW={100}
                        maxW={160}
                        w={'80%'}
                        ratio={1}
                        mt={4}
                    >
                        <Image
                            border={'2px solid'}
                            borderRadius="full"
                            src={profilePic}
                            alt="Austin Bayley"
                            boxShadow={'lg'}
                        />
                    </AspectRatio>
                    <Heading whiteSpace={'nowrap'}>{'-->'}</Heading>
                    <Heading fontSize={'6xl'}>🇮🇹</Heading>
                    <Spacer />
                </HStack>

                <Heading size={'xl'} textAlign={'center'}>
                    Austin's Roam to Rome
                </Heading>
                <HStack>
                    <Popover trigger="hover">
                        <PopoverTrigger>
                            <Button
                                colorScheme="green"
                                style={{ textDecoration: 'none' }}
                                leftIcon={<FaMoneyBill />}
                            >
                                Donate!
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent w={'min-content'}>
                            <PopoverArrow />
                            <PopoverBody>
                                <HStack alignItems={'center'}>
                                    <Link
                                        href={
                                            'https://www.gofundme.com/f/roam-to-rome-for-mind'
                                        }
                                        isExternal
                                    >
                                        <Button
                                            colorScheme="green"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            GoFundMe
                                        </Button>
                                    </Link>
                                    <Link
                                        href={
                                            'https://cisco.benevity.org/campaigns/1702'
                                        }
                                        isExternal
                                    >
                                        <Button
                                            colorScheme="blue"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Benevity (Cisco)
                                        </Button>
                                    </Link>
                                </HStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Tooltip label="Flickr" hasArrow>
                        <Link
                            href={'https://flickr.com/people/193758503@N05/'}
                            isExternal
                        >
                            <IconButton
                                icon={<FaFlickr />}
                                aria-label={'Flickr'}
                            />
                        </Link>
                    </Tooltip>
                    <Tooltip label="Strava" hasArrow>
                        <Link
                            href={'https://www.strava.com/athletes/108989575'}
                            isExternal
                        >
                            <IconButton
                                icon={<FaStrava />}
                                aria-label={'Strava'}
                            />
                        </Link>
                    </Tooltip>
                </HStack>

                <Divider p={2} />

                <Text as={'p'}>
                    Hello and welcome to my foolish endeavour! Over the course
                    of the next year I will be travelling the distance from
                    Buckingham Palace to the Colosseum in Rome and back again by
                    foot to raise money for{' '}
                    <Link
                        isExternal
                        href={'https://www.mind.org.uk/'}
                        color={linkColour}
                    >
                        Mind
                    </Link>
                    , a mental health charity. The idea is not to walk the whole
                    distance in one go but to log activities throughtout 2024 to
                    make up the distance with progress being shown on this site.
                    I've added some detail below:
                </Text>

                <UnorderedList>
                    <ListItem>
                        Why those locations? Mainly because I'm based near
                        London, it seems a challenging distance for me & I like
                        the homophonic nature of the words "roam" & "Rome"!
                    </ListItem>
                    <ListItem>
                        Why{' '}
                        <Link
                            isExternal
                            href={'https://www.mind.org.uk/'}
                            color={linkColour}
                        >
                            Mind
                        </Link>
                        ? Mental health is so important. It's something that
                        impacts us all & I know negative mental health has
                        impacted (and sometimes still does impact) me so it's
                        something that's close to my <Text as="s">heart</Text>{' '}
                        head. It's so important to have organisations out there
                        that can provide resources and support to those that
                        need it. In the case of Mind, they provide everything
                        from{' '}
                        <Link
                            isExternal
                            href={
                                'https://www.mind.org.uk/information-support/types-of-mental-health-problems/'
                            }
                            color={linkColour}
                        >
                            resources to help you understand the different ways
                            you might be feeling
                        </Link>
                        ;{' '}
                        <Link
                            isExternal
                            href={
                                'https://www.mind.org.uk/information-support/drugs-and-treatments/talking-therapy-and-counselling/how-to-find-a-therapist/'
                            }
                            color={linkColour}
                        >
                            to finding professional help
                        </Link>
                        ;{' '}
                        <Link
                            isExternal
                            href={
                                'https://www.mind.org.uk/information-support/helping-someone-else/'
                            }
                            color={linkColour}
                        >
                            to learning how to help someone else
                        </Link>
                        .
                    </ListItem>
                    <ListItem>
                        How's it going to work? Over the course of the next year
                        I will be logging foot-based travel activities (walking,
                        running, hiking, hopping, skipping etc.) to track my
                        progress along a route as the crow would fly to & from
                        the locations listed above. I will only be logging
                        dedicated activities, by which I mean things that are
                        non-essential foot based travel i.e. a walk around the
                        block, a hike up a mountain, a run on a treadmill or
                        walking a journey I would generally drive are all valid
                        but a saunter around the shops to pick up a pint of milk
                        or meandering around the office are not. I plan to use{' '}
                        <Link
                            isExternal
                            href={'https://www.strava.com/athletes/108989575'}
                            color={linkColour}
                        >
                            Strava
                        </Link>{' '}
                        to track activities although I am terrible at
                        remembering to start / stop tracking & I may not log
                        some things for privacy (e.g. my route to work) so don't
                        expect to see everything on there. In cases where I
                        forget or don't log it on Strava, Apple Health data will
                        be used. The end date will be 1 year after the start
                        date with the start date anticipated to be 01/01/2024
                        (assuming all goes well with launching this site!).
                    </ListItem>
                </UnorderedList>

                <Text>
                    Distance-wise, this equates to over a marathon / week which
                    sounds quite challenging to me! If it happens to be too
                    easy, I shall be making it more difficult & if it's too
                    difficult, I shall be working harder for it ;) I have a
                    feeling that consistency will be the real challenge but I
                    know that having a target to hit with that challenge being
                    about getting outside & moving for a cause will be a great
                    motivator for me & hopefully a big boost to my mental health
                    too.
                </Text>

                <Text>
                    Anyways, thank you very much for reading! It's a great cause
                    so please do{' '}
                    <Link
                        href={
                            'https://www.gofundme.com/f/roam-to-rome-for-mind'
                        }
                        isExternal
                        color={linkColour}
                    >
                        donate
                    </Link>
                    , follow along on socials (
                    <Link
                        isExternal
                        href={'https://www.strava.com/athletes/108989575'}
                        color={linkColour}
                    >
                        Strava
                    </Link>{' '}
                    linked for tracking &{' '}
                    <Link
                        href={'https://flickr.com/people/193758503@N05/'}
                        isExternal
                        color={linkColour}
                    >
                        Flickr
                    </Link>{' '}
                    for pictures taken along the way), check back here to see my
                    progress on the map & reach out if you fancy a walk / run /
                    hop / skip / whatever because I have a feeling this will be
                    more fun with friends :D
                </Text>
            </VStack>
        </Box>
    )
}

export default Profile
