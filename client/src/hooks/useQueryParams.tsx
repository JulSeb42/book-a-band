/*=============================================== useQueryParams ===============================================*/

import { useSearchParams } from "react-router-dom"

import { filterObject } from "utils"
import type { SortType } from "types"

export const useQueryParams = () => {
    const [searchParams] = useSearchParams()
    const city: string | null = searchParams.get("city")
    const genre: string | null = searchParams.get("genre")
    const query: string | null = searchParams.get("query")
    const page: string | null = searchParams.get("page")
    const sort: string | null = searchParams.get("sort")

    const params: any = {
        city,
        genre,
        query,
        page,
        sort,
    }
    const filteredParams: {
        city?: string
        genre?: string
        query?: string
        page?: string
        sort?: SortType
    } = filterObject(params, ([_, v]) => v !== null)

    return filteredParams
}
