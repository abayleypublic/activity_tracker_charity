import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { cardTheme } from './card'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    components: {
        Card: cardTheme,
    },
})

export default theme
