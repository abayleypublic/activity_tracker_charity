import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMap,
    useMapEvent,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import { LatLngExpression } from 'leaflet'
import {
    Box,
    Container,
    ContainerProps,
    Icon,
    IconButton,
    LayoutProps,
    chakra,
    shouldForwardProp,
    useTimeout,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { motion, isValidMotionProp } from 'framer-motion'

const POSITION_CLASSES: { [key: string]: string } = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

interface ExpandButtonProps {
    position: string
    toggle: () => void
}

const ExpandButton: React.FC<ExpandButtonProps> = (props) => {
    const positionClass =
        (props.position && POSITION_CLASSES[props.position]) ||
        POSITION_CLASSES.topright

    return (
        <Container className={positionClass} w="min-content" p={0}>
            <Container
                className="leaflet-control leaflet-bar"
                w="min-content"
                p={0}
            >
                <IconButton
                    backgroundColor={'white'}
                    colorScheme={'black'}
                    icon={<Icon as={FontAwesomeIcon} icon={faExpand} />}
                    aria-label={'Expand Map'}
                    onClick={props.toggle}
                />
            </Container>
        </Container>
    )
}

const Refresher = () => {
    const map = useMap()

    // useMapEvent('move', (e) => {

    // })

    setTimeout(() => {
        map.invalidateSize()
        map.setView(map.getCenter(), map.getZoom(), {
            animate: true,
        })
    }, 500)
    return <Container />
}

interface MapProps {
    w: Array<number>
    h: Array<number>
    eW: Array<number>
    eH: Array<number>
}

const Map: React.FC<MapProps> = (props) => {
    const [expanded, setExpanded] = useState(false)

    const limeOptions = { color: 'lime' }

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ] as Array<LatLngExpression>

    const width = expanded ? props.eW : props.w
    const height = expanded ? props.eH : props.h

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <Box w={width} h={height} as={motion.div} layout="preserve-aspect">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                whenReady={() => {
                    console.log('Map ready')
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ExpandButton position={'topright'} toggle={toggleExpanded} />
                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Refresher />
            </MapContainer>
        </Box>
    )
}

export default Map
