/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"
import type { AxiosResponse } from "axios"
import type { ServerErrorType } from "types"

export const useFetch = <T,>(fetchFunction: Promise<AxiosResponse>) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ServerErrorType | undefined>(undefined)

    useEffect(() => {
        const getData = async () =>
            await fetchFunction
                .then((res: AxiosResponse<T>) => {
                    setResponse(res.data)
                    setLoading(false)
                })
                .catch((err: ServerErrorType) => {
                    setError(err)
                    setLoading(false)
                })

        getData()
        // eslint-disable-next-line
    }, [])

    return { response, error, loading } as const
}
