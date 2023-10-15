import React, { useState } from 'react'
import ChakraBox from './chakrabox'
import Map, { Line, Marker } from './map'
import { Skeleton } from '@chakra-ui/react'
import { LatLngExpression, Icon as LeafletIcon, PathOptions } from 'leaflet'
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

    const baseWidth = { base: 300, sm: 400, lg: 300 }
    const baseHeight = { base: 300, sm: 400, lg: 500 }
    const expandedWidth = { base: 300, sm: 400, lg: 600 }
    const expandedHeight = { base: 300, sm: 400, lg: 700 }

    if (!props.challenge || !props.progress) {
        return (
            <Skeleton
                w={expanded ? expandedWidth : baseWidth}
                h={expanded ? expandedHeight : baseHeight}
            />
        )
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
            w={expanded ? expandedWidth : baseWidth}
            h={expanded ? expandedHeight : baseHeight}
            layout
        >
            <Map
                toggleMap={toggleMap}
                markers={[marker]}
                lines={[line]}
                center={[51.5014708012926, -0.14184707849440084]}
            />
        </ChakraBox>
    )
}

export default MapBox
