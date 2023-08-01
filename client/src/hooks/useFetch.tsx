/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"
import type { AxiosResponse } from "axios"
import type { ServerErrorType } from "types"

export const useFetch = <T,>(
    fetchFunction: Promise<AxiosResponse<any, any>>
) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ServerErrorType | undefined>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: AxiosResponse<T>) => setResponse(res.data))
            .catch((err: any) => setError(err))

        setLoading(false)
        // eslint-disable-next-line
    }, [])

    return { response, error, loading } as const
}
