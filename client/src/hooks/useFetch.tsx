/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"
import type { AxiosError, AxiosResponse } from "axios"

export const useFetch = <T,>(
    fetchFunction: Promise<AxiosResponse<any, any>>
) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<AxiosError | undefined>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: AxiosResponse<T>) => setResponse(res.data))
            .catch((err: any) => setError(err))

        setLoading(false)
        // eslint-disable-next-line
    }, [])

    return { response, error, loading } as const
}
