/*=============================================== Pagination component ===============================================*/

import { Fragment, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { Icon } from "components"
import { useQueryParams, useAdminParams } from "hooks"
import { filterObject } from "utils"

import {
    StyledPagination,
    StyledPaginationButton,
} from "components/ui/Pagination/styles"
import type { PaginationProps } from "components/ui/Pagination/types"

export function Pagination({ totalPages, pageLimit = 5 }: PaginationProps) {
    const [_, setSearchParams] = useSearchParams()

    const { page, ...params } = useQueryParams()
    const adminParams = useAdminParams()

    const filteredAdminParams: any = filterObject(
        adminParams,
        ([_, v]) => v !== null
    )

    const [currentPage, setCurrentPage] = useState(parseInt(page || "1"))

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)

        setSearchParams({
            ...params,
            ...filteredAdminParams,
            page: (currentPage - 1).toString(),
        })
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)

        setSearchParams({
            ...params,
            ...filteredAdminParams,
            page: (currentPage + 1).toString(),
        })
    }

    const handlePage = (n: number) => {
        setCurrentPage(n)

        setSearchParams({
            ...params,
            ...filteredAdminParams,
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

    if (totalPages <= 1) return null

    return (
        <StyledPagination>
            <StyledPaginationButton
                disabled={currentPage === 1}
                onClick={handlePrev}
            >
                <Icon src="arrow-left" size={16} />
            </StyledPaginationButton>

            {paginationGroup[0] !== 1 && (
                <Fragment>
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
                </Fragment>
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
                <Fragment>
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
                </Fragment>
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
