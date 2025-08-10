import { useEffect, useState } from 'react'
import license from '@/assets/LICENSE.txt'

const useLicenses = () => {
    const [licenses, setLicenses] = useState<string>('')

    const getLicenses = async () => {
        const data = await fetch(license)
        setLicenses(await data.text())
    }

    useEffect(() => {
        getLicenses()
    }, [license])

    return { licenses }
}

export default useLicenses
