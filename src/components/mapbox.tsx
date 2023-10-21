import React, { useState } from 'react'
import ChakraBox from './chakrabox'
import Map, { Line, Marker } from './map'
import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import ProfilePic from '../assets/me.jpeg'

function greatCirclePoints(
    start: [number, number],
    end: [number, number],
    numPoints: number
): Array<[number, number]> {
    const earthRadius = 6371
    const greatCirclePoints: Array<[number, number]> = [start]
    const startLat = (start[0] * Math.PI) / 180
    const startLon = (start[1] * Math.PI) / 180
    const endLat = (end[0] * Math.PI) / 180
    const endLon = (end[1] * Math.PI) / 180

    const dLat = endLat - startLat
    const dLon = endLon - startLon

    const f =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(startLat) *
            Math.cos(endLat) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)

    const distance = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)) // Angular distance in radians

    for (let i = 1; i <= numPoints - 2; i++) {
        const fraction = i / numPoints

        const a = Math.sin((1 - fraction) * distance) / Math.sin(distance)
        const b = Math.sin(fraction * distance) / Math.sin(distance)

        const x =
            a * Math.cos(startLat) * Math.cos(startLon) +
            b * Math.cos(endLat) * Math.cos(endLon)
        const y =
            a * Math.cos(startLat) * Math.sin(startLon) +
            b * Math.cos(endLat) * Math.sin(endLon)
        const z = a * Math.sin(startLat) + b * Math.sin(endLat)

        const intermediatePoint: [number, number] = [
            (Math.atan2(z, Math.sqrt(x ** 2 + y ** 2)) * 180) / Math.PI,
            (Math.atan2(y, x) * 180) / Math.PI,
        ]

        greatCirclePoints.push(intermediatePoint)
    }

    greatCirclePoints.push(end)
    return greatCirclePoints
}

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

    const baseWidth = { base: 240, sm: 400, md: 696, lg: 320 }
    const baseHeight = { base: 240, sm: 400, md: 522, lg: height * baseFactor }
    const expandedWidth = { lg: 600 }
    const expandedHeight = { lg: height * expandedFactor }

    if (!props.challenge || !props.progress) {
        return <Skeleton w={baseWidth} h={baseHeight} />
    }

    const start = props.challenge.target.route.waypoints[0].latlng
    const end = props.challenge.target.route.waypoints.slice(-1)[0].latlng

    const line: Line = {
        positions: greatCirclePoints(
            [start.lat, start.lng] as [number, number],
            [end.lat, end.lng] as [number, number],
            480
        ),
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
