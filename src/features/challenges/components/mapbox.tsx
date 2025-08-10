import { useState } from 'react'
import ChakraBox from '@/components/chakrabox'
import Map, { Line, Marker } from '@/features/challenges/components/map'
import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import ProfilePic from '@/assets/me.jpeg'
import { greatCirclePoints } from '@/features/challenges/utils/maps'

interface MapBoxProps {
    challenge?: Challenge
    progress?: Progress
}

const MapBox = ({ challenge, progress }: MapBoxProps) => {
    const [expanded, setExpanded] = useState(false)
    const toggleMap = () => {
        setExpanded(!expanded)
    }

    const showExpand = useBreakpointValue({ base: false, lg: true })
    const isExpanded = useBreakpointValue({ base: false, lg: expanded })

    const height = screen.height
    const baseFactor = 0.5
    const expandedFactor = 0.55

    const baseWidth = { base: 240, sm: 400, md: 696, lg: 320 }
    const baseHeight = { base: 240, sm: 400, md: 522, lg: height * baseFactor }
    const expandedWidth = { lg: 600 }
    const expandedHeight = { lg: height * expandedFactor }

    if (!challenge || !progress) {
        return <Skeleton w={baseWidth} h={baseHeight} />
    }

    const start = challenge.target.route.waypoints[0].latlng
    const end = challenge.target.route.waypoints[1].latlng

    const line: Line = {
        positions: greatCirclePoints(
            [start.lat, start.lng] as [number, number],
            [end.lat, end.lng] as [number, number],
            480
        ),
    }

    const marker: Marker = {
        position: [progress.location.latlng.lat, progress.location.latlng.lng],
        icon: {
            iconUrl: ProfilePic,
            iconSize: [40, 40],
            className: 'circular',
        },
        panTo: true,
    }

    return (
        <ChakraBox
            w={isExpanded ? expandedWidth : baseWidth}
            h={isExpanded ? expandedHeight : baseHeight}
            layout
        >
            <Map
                toggleMap={toggleMap}
                markers={[marker]}
                lines={[line]}
                center={[51.5014708012926, -0.14184707849440084]}
                zoom={11}
                showExpand={showExpand}
                showCentre
            />
        </ChakraBox>
    )
}

export default MapBox
