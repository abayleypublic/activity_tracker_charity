import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/app'
import Provider from '@/app/provider'

const root = document.getElementById('root')
if (!root) throw new Error('no root element found')

createRoot(root).render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
)
