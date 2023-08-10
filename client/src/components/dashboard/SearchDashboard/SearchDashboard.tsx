/*=============================================== SearchDashboard component ===============================================*/

import { type ChangeEvent, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { slugify } from "ts-utils-julseb"

import { Input } from "components"
import { Select } from "components/dashboard/SearchDashboard/Select"
import { useAdminParams } from "hooks"
import { filterObject } from "utils"

import { StyledSearchDashboard } from "components/dashboard/SearchDashboard/styles"
import type { SearchDashboardProps } from "components/dashboard/SearchDashboard/types"
import type { UserRoleType } from "types"

export const SearchDashboard = ({
    search,
    setSearch,
    isArtistsList,
}: SearchDashboardProps) => {
    const { role: roleParam, ...otherParams } = useAdminParams()

    const [_, setSearchParams] = useSearchParams()

    const [role, setRole] = useState<string>(slugify(roleParam || "all"))

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        const newParams: any = filterObject(
            {
                ...otherParams,
                role: roleParam,
                page: null,
            },
            ([_, v]) => v !== null
        )
        setSearchParams(newParams)
    }

    const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value)

        if (e.target.value !== "all") {
            const newParams: any = filterObject(
                {
                    ...otherParams,
                    role: slugify(e.target.value),
                    page: null,
                },
                ([_, v]) => v !== null
            )
            setSearchParams(newParams)
        } else {
            const newParams: any = filterObject(
                {
                    ...otherParams,
                    role: null,
                    page: null,
                },
                ([_, v]) => v !== null
            )
            setSearchParams(newParams)
        }
    }

    const roles: (UserRoleType | "all")[] = ["all", "admin", "artist", "user"]

    return (
        <StyledSearchDashboard>
            <Input
                id="search"
                type="search"
                label="Search user"
                value={search}
                onChange={handleSearch}
            />

            <Select
                label="Filter by role"
                value={role}
                onChange={handleRole}
                options={roles}
            />

            {isArtistsList && ""}
        </StyledSearchDashboard>
    )
}
