import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import { LatLngExpression } from 'leaflet'
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

interface MapProps {
    toggleMap: () => void
}

const Map: React.FC<MapProps> = (props) => {
    const limeOptions = { color: 'lime' }

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ] as Array<LatLngExpression>

    const toggleExpanded = () => {
        props.toggleMap()
    }

    return (
        <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ExpandButton position={'topright'} toggle={toggleExpanded} />
            <Polyline pathOptions={limeOptions} positions={polyline} />
            <Refresher />
        </MapContainer>
    )
}

export default Map
