import { ChakraProvider, ColorModeScript, ThemeConfig } from '@chakra-ui/react'
import theme from '@/app/theme'
import { PropsWithChildren } from 'react'

interface ProviderProps extends PropsWithChildren {}

const Provider = ({ children }: ProviderProps) => (
    <ChakraProvider theme={theme}>
        <ColorModeScript
            initialColorMode={(theme as ThemeConfig).initialColorMode}
        />
        {children}
    </ChakraProvider>
)

export default Provider
