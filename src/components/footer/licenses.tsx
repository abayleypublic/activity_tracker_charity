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
} from '@chakra-ui/react'
import license from '../../assets/LICENSE.txt'
import { useEffect, useState } from 'react'
import { FaList } from 'react-icons/fa'

const Licenses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [licenses, setLicenses] = useState<string>('')

    useEffect(() => {
        fetch(license).then((res) =>
            res.text().then((text) => setLicenses(text))
        )
    }, [])

    console.log(licenses)

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
                        backgroundColor={'white'}
                    >
                        Licenses
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <Text>
                            In the making of this site, I have had the pleasure
                            of using some truly wonderful libraries! Below is a
                            list of those that have gone into creating the UI
                            and their licenses.
                        </Text>
                        <Divider p={2} />
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
