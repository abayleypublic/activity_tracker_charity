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
                        <Heading size="sm">General</Heading>
                        <Text mb={2}>
                            This website enables user input of "activity"
                            information to track progress against a defined
                            "target" which is encapsulated by a "challenge".
                            Currently this is only enabled for myself (Austin
                            Bayley) & a single challenge. For all users other
                            than myself (Austin Bayley), there is no expectation
                            or functionality to input personal information with
                            personal information only being gathered as part of
                            the logging process which is described below. Data
                            is stored securely and no data will be shared or
                            sold.
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
                </ModalContent>
            </Modal>
        </>
    )
}

export default Policy
