import { useState } from 'react'
import ChakraBox from './chakrabox'
import Map from './map'

const MapBox = () => {
    const [expanded, setExpanded] = useState(false)
    const toggleMap = () => {
        setExpanded(!expanded)
    }

    const baseWidth = { base: 300, sm: 400, lg: 300 }
    const baseHeight = { base: 300, sm: 400, lg: 500 }
    const expandedWidth = { base: 300, sm: 400, lg: 600 }
    const expandedHeight = { base: 300, sm: 400, lg: 700 }

    return (
        <ChakraBox
            w={expanded ? expandedWidth : baseWidth}
            h={expanded ? expandedHeight : baseHeight}
            layout
        >
            <Map toggleMap={toggleMap} />
        </ChakraBox>
    )
}

export default MapBox
