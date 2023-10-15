import {
    MapContainer,
    TileLayer,
    Polyline,
    useMap,
    Marker,
    Popup,
    Circle,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import {
    IconOptions,
    LatLngExpression,
    Icon as LeafletIcon,
    PathOptions,
} from 'leaflet'
import { Container, Icon, IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

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
                    color={'black'}
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

    setTimeout(() => {
        map.invalidateSize()
        map.setView(map.getCenter(), map.getZoom(), {
            animate: true,
        })
    }, 100)
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
}

const Map: React.FC<MapProps> = (props) => {
    const defaultOptions = { color: 'lime' }

    const toggleExpanded = () => {
        props.toggleMap()
    }

    const center = props.markers?.filter((marker) => marker.panTo)[0]

    return (
        <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={(center && center.position) || props.center}
            zoom={13}
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

            <ExpandButton position={'topright'} toggle={toggleExpanded} />
            <Refresher />
        </MapContainer>
    )
}

export default Map
