import {
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
    Text,
    useColorModeValue,
    Heading,
    UnorderedList,
    ListItem,
    Link,
} from '@chakra-ui/react'
import { FaInfo } from 'react-icons/fa'
import { useLocalStorage } from '../../hooks/useStorage'

export const PolicyKey = 'policy-acknowledged'

export enum PolicyAcknowledgement {
    Yes = 'yes',
    No = 'no',
}

const Policy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bgColor = useColorModeValue('white', 'gray.700')
    const { update: updateAck } = useLocalStorage(PolicyKey)

    const closed = () => {
        updateAck(PolicyAcknowledgement.Yes)
        onClose()
    }

    return (
        <>
            <Tooltip label="Privacy" hasArrow>
                <IconButton
                    aria-label={'open privacy information modal'}
                    onClick={onOpen}
                    icon={<FaInfo />}
                />
            </Tooltip>

            <Modal isOpen={isOpen} onClose={closed} size={'xl'}>
                <ModalOverlay />
                <ModalContent maxH={'80vh'} overflowY={'auto'}>
                    <ModalHeader
                        position={'sticky'}
                        top={0}
                        backgroundColor={bgColor}
                    >
                        Privacy
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <Heading size="sm">Preamble</Heading>
                        <UnorderedList mb={2}>
                            <ListItem>Version: 1.0.0</ListItem>
                            <ListItem>Last Updated: 10/12/2023</ListItem>
                        </UnorderedList>

                        <Text mb={2}>
                            This website enables user input of "activity"
                            information to track progress against a defined
                            "target" which is encapsulated by a "challenge". For
                            the purpose of this notice, "myself" relates to the
                            creator of this site, Austin Bayley (contact details
                            below).
                        </Text>

                        <Heading size="sm">Contact</Heading>
                        <UnorderedList mb={2}>
                            <ListItem>Name: Austin Bayley</ListItem>
                            <ListItem>
                                Email:{' '}
                                <Link href="mailto:roam@austinbayley.co.uk">
                                    roam@austinbayley.co.uk
                                </Link>
                            </ListItem>
                        </UnorderedList>

                        <Heading size="sm">General</Heading>
                        <Text mb={2}>
                            Functionality is only enabled for myself & a single,
                            pre-programmed challenge. For all users other than
                            myself, there is no expectation or functionality to
                            input personal information with such information
                            only being gathered as part of the logging process
                            which is described below. Data is stored securely
                            which access controls in place. No data will be
                            shared, sold or used for purposes other than those
                            outlined below.
                        </Text>

                        <Heading size="sm">Cookies</Heading>
                        <Text mb={2}>
                            Only functional cookies are used on this site.
                        </Text>

                        <Heading size="sm">Logging</Heading>
                        <Text mb={2}>
                            Logs are gathered to prevent abuse & to maintain
                            data & site security. Logs contain personal
                            information drawn from requests made to the server,
                            specifically IP addresses and user account
                            identifiers. An IP address is the IP address from
                            which the server recieved a request. A user
                            identifier is a string that can be used to identify
                            a user account. For any user that is not logged in
                            (any user that is not myself), an anonymous user
                            identifier will be used. It will not be possible to
                            correlate this anonymous identifier with an
                            individual. A combination of IP address and user
                            identifier will be used to determine suspicious
                            activity. Logs are automatically deleted after 30
                            days.
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Policy
