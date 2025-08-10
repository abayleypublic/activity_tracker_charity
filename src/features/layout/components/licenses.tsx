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
    Divider,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'

import { FaList } from 'react-icons/fa'
import useLicenses from '@/features/layout/hooks/use-licenses'

const Licenses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { licenses } = useLicenses()

    const bgColor = useColorModeValue('white', 'gray.700')

    return (
        <>
            <Tooltip label="Licenses" hasArrow>
                <IconButton
                    aria-label={'open license information modal'}
                    onClick={onOpen}
                    icon={<FaList />}
                />
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent maxH={'80vh'} overflowY={'auto'}>
                    <ModalHeader
                        position={'sticky'}
                        top={0}
                        backgroundColor={bgColor}
                    >
                        Licenses
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <Text>
                            In the making of this site, I have had the pleasure
                            of using some truly wonderful libraries! Below is a
                            list of those that have gone into creating the UI
                            and their licenses. I also used Twemoji for the
                            favicon of this site.
                        </Text>
                        <Divider p={2} />
                        <Text whiteSpace={'pre-wrap'}>
                            Name: Twemoji <br />
                            Link: https://twemoji.twitter.com/ <br />
                            Copyright 2020 Twitter, Inc and other contributors{' '}
                            <br />
                            Code licensed under the MIT License:
                            http://opensource.org/licenses/MIT <br />
                            Graphics licensed under CC-BY 4.0:
                            https://creativecommons.org/licenses/by/4.0/
                            <br />
                            <br />
                            ---
                            <br />
                        </Text>
                        <Text whiteSpace={'pre-wrap'}>{licenses}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Licenses
