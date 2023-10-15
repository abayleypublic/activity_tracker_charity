import React, { useState } from 'react'
import ChakraBox from './chakrabox'
import Map, { Line, Marker } from './map'
import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import ProfilePic from '../assets/me.jpeg'

interface MapBoxProps {
    challenge?: Challenge
    progress?: Progress
}

const MapBox: React.FC<MapBoxProps> = (props) => {
    const [expanded, setExpanded] = useState(false)
    const toggleMap = () => {
        setExpanded(!expanded)
    }

    const showExpand = useBreakpointValue({ base: false, lg: true })
    const isExpanded = useBreakpointValue({ base: false, lg: expanded })

    const height = screen.height
    const baseFactor = 0.5
    const expandedFactor = 0.55

    const baseWidth = { base: 300, sm: 400, md: 700, lg: 300 }
    const baseHeight = { base: 300, sm: 400, md: 500, lg: height * baseFactor }
    const expandedWidth = { lg: 600 }
    const expandedHeight = { lg: height * expandedFactor }

    if (!props.challenge || !props.progress) {
        return <Skeleton w={baseWidth} h={baseHeight} />
    }

    const line: Line = {
        positions: props.challenge.target.route.waypoints.map((waypoint) => [
            waypoint.latlng.lat,
            waypoint.latlng.lng,
        ]),
    }

    const marker: Marker = {
        position: [
            props.progress.location.latlng.lat,
            props.progress.location.latlng.lng,
        ],
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
            />
        </ChakraBox>
    )
}

export default MapBox
