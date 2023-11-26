import {
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
    Text,
    useColorModeValue,
    Heading,
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
            <Tooltip label="Policy" hasArrow>
                <IconButton
                    aria-label={'open policy information modal'}
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
                        Policy
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <Heading size="sm">General</Heading>
                        <Text mb={2}>
                            Continued use of this website constitutes acceptance
                            of this policy. This website enables user input of
                            "activity" information to track progress against a
                            defined "target" which is encapsulated by a
                            "challenge". The scope of this site is for a single,
                            pre-informed, user to track activity data against a
                            single, pre-made, challenge for the purpose of
                            raising money for charity. Other users will not be
                            expected or able to input any data or sign up to the
                            platform. Data is stored securely, is available to
                            the user to whom it pertains with information
                            relevant to this challenge being made available to
                            all by a public API. No data will be shared or sold.
                        </Text>
                        <Heading size="sm">Cookies</Heading>
                        <Text mb={2}>
                            Only functional cookies are used on this site.
                        </Text>
                        <Heading size="sm">Logging</Heading>
                        <Text mb={2}>
                            Logs are gathered to prevent abuse & maintain site
                            security. Logs contain IP address and user ID
                            information. IP address is the IP address from which
                            the server recieved a request. For anonymous users
                            of this platform (anybody that is not logged in -
                            this is all users by default), user ID will be
                            "unknown". Logs are automatically deleted after 30
                            days.
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closed}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Policy
