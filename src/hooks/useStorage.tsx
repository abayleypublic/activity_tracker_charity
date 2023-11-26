import { useEffect, useState } from 'react'

/**
 * Utilises localStorage to store a value and dispatches an event when updated
 * @param key Key to watch & update
 * @returns hook for value & update function
 */
export const useLocalStorage = (key: string) => {
    const [value, setValue] = useState<string | null>(null)

    /**
     * Get value from localStorage and set it as the value
     */
    useEffect(() => {
        setValue(localStorage.getItem(key))
    }, [key])

    /**
     * Update localstorage and dispatch event which should be picked up by other hooks
     * @param value Value to set against key in localStorage
     */
    const update = (value: string) => {
        localStorage.setItem(key, value)
        window.dispatchEvent(new Event('storage'))
    }

    /**
     * Listen for updates to localStorage and update the value if not the same
     */
    window.addEventListener('storage', () => {
        const val = localStorage.getItem(key)
        if (val === value) return
        setValue(val)
    })

    return { value, update }
}
