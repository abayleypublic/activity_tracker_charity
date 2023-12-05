import {
    MapContainer,
    TileLayer,
    Polyline,
    useMap,
    Marker,
    Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import { IconOptions, Icon as LeafletIcon, PathOptions } from 'leaflet'
import { Container, Icon, IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowsToDot,
    faCompress,
    faExpand,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const POSITION_CLASSES: { [key: string]: string } = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

const DEFAULT_ZOOM = 12

interface ExpandButtonProps {
    position: string
    toggle: () => void
    expanded: boolean
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
                backgroundColor={'white'}
            >
                <IconButton
                    backgroundColor={'white'}
                    color={'black'}
                    icon={
                        <Icon
                            as={FontAwesomeIcon}
                            icon={props.expanded ? faCompress : faExpand}
                        />
                    }
                    aria-label={'Expand Map'}
                    onClick={props.toggle}
                />
            </Container>
        </Container>
    )
}

interface CentreButtonProps {
    position: string
    centre?: [number, number]
}

const CentreButton: React.FC<CentreButtonProps> = (props) => {
    const positionClass =
        (props.position && POSITION_CLASSES[props.position]) ||
        POSITION_CLASSES.bottomright

    const map = useMap()

    const centre = () => {
        if (!props.centre) return
        map.setView(props.centre, DEFAULT_ZOOM, {
            animate: true,
        })
    }

    return (
        <Container className={positionClass} w="min-content" p={0}>
            <Container
                className="leaflet-control leaflet-bar"
                w="min-content"
                p={0}
                backgroundColor={'white'}
            >
                <IconButton
                    backgroundColor={'white'}
                    color={'black'}
                    icon={<Icon as={FontAwesomeIcon} icon={faArrowsToDot} />}
                    aria-label={'Expand Map'}
                    onClick={centre}
                />
            </Container>
        </Container>
    )
}

const Refresher = () => {
    const map = useMap()

    setTimeout(() => {
        const m = map.invalidateSize()
        map.setView(m.getCenter(), m.getZoom(), {
            animate: true,
        })
    }, 200)
    return <Container />
}

export interface Line {
    positions: Array<[number, number]>
    options?: PathOptions
}

export interface Marker {
    position: [number, number]
    icon?: IconOptions
    description?: string
    panTo?: boolean
}

interface MapProps {
    toggleMap: () => void
    lines?: Array<Line>
    markers?: Array<Marker>
    center: [number, number]
    zoom?: number
    showExpand?: boolean
    showCentre?: boolean
}

const Map: React.FC<MapProps> = (props) => {
    const defaultOptions = { color: 'dodgerblue' }
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(!expanded)
        props.toggleMap()
    }

    const center = props.markers?.filter((marker) => marker.panTo)[0]

    return (
        <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={(center && center.position) || props.center}
            zoom={props.zoom || DEFAULT_ZOOM}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {props.markers &&
                props.markers.map((marker) => (
                    <Marker
                        key={marker.position.toString()}
                        position={marker.position}
                        icon={marker.icon && new LeafletIcon(marker.icon)}
                    >
                        {marker.description && (
                            <Popup>{marker.description}</Popup>
                        )}
                    </Marker>
                ))}

            {props.lines &&
                props.lines.map((line) => (
                    <Polyline
                        key={line.positions.toString()}
                        pathOptions={line.options || defaultOptions}
                        positions={line.positions}
                    />
                ))}

            {props.showExpand && (
                <ExpandButton
                    position={'topright'}
                    toggle={toggleExpanded}
                    expanded={expanded}
                />
            )}

            {props.showCentre && (
                <CentreButton
                    position={props.showExpand ? 'bottomleft' : 'topright'}
                    centre={center?.position}
                />
            )}

            <Refresher />
        </MapContainer>
    )
}

export default Map
