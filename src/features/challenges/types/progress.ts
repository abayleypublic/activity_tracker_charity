interface Progress {
    percent: number
    distanceCovered: number
    location: {
        latlng: {
            lat: number
            lng: number
        }
        name: string
    }
}
