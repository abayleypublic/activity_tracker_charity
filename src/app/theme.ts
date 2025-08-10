import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
    container: {
        boxShadow: 'md',
    },
})

const cardTheme = defineMultiStyleConfig({ baseStyle })

const theme = extendTheme({
    config,
    components: {
        Card: cardTheme,
    },
})

export default theme
