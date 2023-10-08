import { Container } from '@chakra-ui/react'
import './App.css'
import Map from './components/map'

function App() {
    return (
        <Container h={400} w={400} borderRadius={32} overflow={'clip'} p={0}>
            <Map />
        </Container>
    )
}

export default App
