/*=============================================== usePaginatedData ===============================================*/

import { useSearchParams } from "react-router-dom"

export const usePaginatedData = (data: any[], dataLimit = 10) => {
    const [searchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get("page") || "1")

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return data?.slice(startIndex, endIndex)
    }

    const getNumberOfPages = () => Math.ceil((data?.length || 0) / dataLimit)

    return {
        paginatedData: getPaginatedData(),
        totalPages: getNumberOfPages(),
    }
}
