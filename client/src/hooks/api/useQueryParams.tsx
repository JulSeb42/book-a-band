/*=============================================== useQueryParams ===============================================*/

import { useSearchParams } from "react-router-dom"

import { filterObject } from "utils"

import type { QueryParamsType } from "types"

export function useQueryParams() {
    const [searchParams] = useSearchParams()
    const city: string | null = searchParams.get("city")
    const genre: string | null = searchParams.get("genre")
    const query: string | null = searchParams.get("query")
    const page: string | null = searchParams.get("page")

    const params: QueryParamsType = {
        city,
        genre,
        query,
        page,
    }
    // @ts-expect-error
    const filteredParams: any = filterObject(params, ([_, v]) => v !== null)

    return filteredParams
}
