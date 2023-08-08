/*=============================================== Pagination component ===============================================*/

import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import { Icon } from "components"
import { useQueryParams } from "hooks"

import {
    StyledPagination,
    StyledPaginationButton,
} from "components/ui/Pagination/styles"
import type { PaginationProps } from "components/ui/Pagination/types"

export const Pagination = ({ totalPages, pageLimit = 5 }: PaginationProps) => {
    const [_, setSearchParams] = useSearchParams()

    const { page, ...params } = useQueryParams()

    const [currentPage, setCurrentPage] = useState(parseInt(page || "1"))

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)

        setSearchParams({
            ...params,
            page: (currentPage - 1).toString(),
        })
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)

        setSearchParams({
            ...params,
            page: (currentPage + 1).toString(),
        })
    }

    const handlePage = (n: number) => {
        setCurrentPage(n)

        setSearchParams({
            ...params,
            page: n.toString(),
        })
    }

    const getPaginationGroup = () => {
        const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit

        return new Array(pageLimit)
            .fill(totalPages)
            .map((_, i) => start + i + 1)
            .filter(item => item <= totalPages)
    }
    const paginationGroup = getPaginationGroup()

    return (
        <StyledPagination>
            <StyledPaginationButton
                disabled={currentPage === 1}
                onClick={handlePrev}
            >
                <Icon src="arrow-left" size={16} />
            </StyledPaginationButton>

            {paginationGroup[0] !== 1 && (
                <>
                    <StyledPaginationButton
                        disabled={currentPage === 1}
                        onClick={() => handlePage(1)}
                        $isActive={currentPage === 1}
                    >
                        1
                    </StyledPaginationButton>

                    <StyledPaginationButton as="span" $isMore>
                        ...
                    </StyledPaginationButton>
                </>
            )}

            {paginationGroup.map(page => (
                <StyledPaginationButton
                    onClick={() => handlePage(page)}
                    key={page}
                    $isActive={currentPage === page}
                >
                    {page}
                </StyledPaginationButton>
            ))}

            {paginationGroup[paginationGroup.length - 1] !== totalPages && (
                <>
                    <StyledPaginationButton as="span" $isMore>
                        ...
                    </StyledPaginationButton>

                    <StyledPaginationButton
                        disabled={currentPage === totalPages}
                        onClick={() => handlePage(totalPages)}
                        $isActive={currentPage === totalPages}
                    >
                        {totalPages}
                    </StyledPaginationButton>
                </>
            )}

            <StyledPaginationButton
                disabled={currentPage === totalPages}
                onClick={handleNext}
            >
                <Icon src="arrow-right" size={16} />
            </StyledPaginationButton>
        </StyledPagination>
    )
}
