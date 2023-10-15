interface LatLng {
    lat: number
    lng: number
}

interface Waypoint {
    latlng: LatLng
}

interface Challenge {
    id: string
    name: string
    description: string
    startDate: string
    endDate: string
    public: boolean
    inviteOnly: boolean
    createdBy: string
    target: {
        type: string
        route: {
            waypoints: Array<Waypoint>
        }
        totalDistance: number
    }
    createdDate?: string
}
