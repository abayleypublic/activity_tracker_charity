import {
    Card,
    HStack,
    IconButton,
    Spacer,
    Tooltip,
    useColorMode,
} from '@chakra-ui/react'
import { lazy } from 'react'
import Policy from './policy'
import { FaMoon, FaSun } from 'react-icons/fa'

const Licenses = lazy(() => import('./licenses'))

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Card w={'full'} h={'full'} p={2}>
            <HStack>
                <Spacer />
                <Tooltip label={'Toggle dark mode'} hasArrow>
                    <IconButton
                        onClick={toggleColorMode}
                        aria-label={'toggle dark mode'}
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    />
                </Tooltip>
                <Policy />
                <Licenses />
            </HStack>
        </Card>
    )
}

export default Footer
