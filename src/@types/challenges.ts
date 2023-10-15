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
            waypoints: {
                latlng: {
                    lat: number
                    lng: number
                }
            }[]
        }
        totalDistance: number
    }
    createdDate?: string
}
