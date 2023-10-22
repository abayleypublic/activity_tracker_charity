import React, { useState } from 'react'
import ChakraBox from './chakrabox'
import Map, { Line, Marker } from './map'
import { Skeleton, useBreakpointValue } from '@chakra-ui/react'
import ProfilePic from '../assets/me.jpeg'

/**
 * Implemented per https://www.movable-type.co.uk/scripts/latlong.html
 * @param startLat Start latitude in radians
 * @param endLat End latitude in radians
 * @param distanceLng Distance between longitudes in radians
 * @returns Raw angular haversine distance without conversion to kilometers
 */
const haversineDistance = (
    startLat: number,
    endLat: number,
    distanceLng: number
) => {
    const distanceLat = endLat - startLat

    const a =
        Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(startLat) *
            Math.cos(endLat) *
            Math.sin(distanceLng / 2) *
            Math.sin(distanceLng / 2)

    // Angular distance in radians
    return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

/**
 * Implemented per https://www.movable-type.co.uk/scripts/latlong.html
 * @param start Start coordinates in radians
 * @param end End coordinates in radians
 * @param fraction Fraction of the distance between start and end
 * @param distance Distance between start and end in radians
 * @returns
 */
const intermediatePoint = (
    start: [number, number],
    end: [number, number],
    fraction: number,
    distance: number
): [number, number] => {
    const a = Math.sin((1 - fraction) * distance) / Math.sin(distance)
    const b = Math.sin(fraction * distance) / Math.sin(distance)

    const x =
        a * Math.cos(start[0]) * Math.cos(start[1]) +
        b * Math.cos(end[0]) * Math.cos(end[1])
    const y =
        a * Math.cos(start[0]) * Math.sin(start[1]) +
        b * Math.cos(end[0]) * Math.sin(end[1])
    const z = a * Math.sin(start[0]) + b * Math.sin(end[0])

    return [
        (Math.atan2(z, Math.sqrt(x ** 2 + y ** 2)) * 180) / Math.PI,
        (Math.atan2(y, x) * 180) / Math.PI,
    ]
}

/**
 * Generates coordinates along a great circle route between two points
 * @param start Starting point in [lat, lng] format in degrees
 * @param end Ending point in [lat, lng] format in degrees
 * @param numPoints Number of points to generate
 * @returns Array of coordinates in [lat, lng] format in degrees
 */
const greatCirclePoints = (
    start: [number, number],
    end: [number, number],
    numPoints: number
): Array<[number, number]> => {
    const greatCirclePoints: Array<[number, number]> = [start]
    const startLat = (start[0] * Math.PI) / 180
    const startLon = (start[1] * Math.PI) / 180
    const endLat = (end[0] * Math.PI) / 180
    const endLon = (end[1] * Math.PI) / 180
    const dLat = endLat - startLat

    const distance = haversineDistance(startLat, endLat, dLat)

    for (let i = 1; i <= numPoints - 2; i++) {
        const fraction = i / numPoints
        const intermediate = intermediatePoint(
            [startLat, startLon],
            [endLat, endLon],
            fraction,
            distance
        )

        greatCirclePoints.push(intermediate)
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
                showCentre
            />
        </ChakraBox>
    )
}

export default MapBox
