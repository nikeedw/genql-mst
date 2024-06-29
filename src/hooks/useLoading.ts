import { useState } from 'react'

export const useLoading = (init = false) => {
    const [loading, setLoading] = useState(init)

    const startLoading = () => {
        setLoading(true)
    }

    const stopLoading = () => {
        setLoading(false)
    }

    return { loading, startLoading, stopLoading }
}