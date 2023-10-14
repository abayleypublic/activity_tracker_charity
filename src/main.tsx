import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, ColorModeScript, ThemeConfig } from '@chakra-ui/react'
import theme from './theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript
                initialColorMode={(theme as ThemeConfig).initialColorMode}
            />
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
