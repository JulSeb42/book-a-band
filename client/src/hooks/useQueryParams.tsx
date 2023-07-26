/*=============================================== useQueryParams ===============================================*/

import { useSearchParams } from "react-router-dom"

import { filterObject } from "utils"

export const useQueryParams = () => {
    const [searchParams] = useSearchParams()
    const page: string | null = searchParams.get("page") || null
    const city: string | null = searchParams.get("city") || null
    const genre: string | null = searchParams.get("genre") || null
    const query: string | null = searchParams.get("query") || null

    const params: any = {
        page,
        city,
        genre,
        query,
    }
    const filteredParams = filterObject(params, ([_, v]) => v !== null)

    return filteredParams
}
