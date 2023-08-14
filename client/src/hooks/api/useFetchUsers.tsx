/*=============================================== useFetchUsers ===============================================*/

import { useEffect, useState } from "react"

import { userService } from "api"
import { getFuseUsers, getMinMaxPrices } from "utils"

import type { UserType, FetchUsersType, PricesType } from "types"

type useFetchUsersProps = FetchUsersType & {
    search?: string
}

export const useFetchUsers = ({
    search,
    role,
    status,
    city,
    genre,
    query,
    verified,
    sort,
}: useFetchUsersProps) => {
    const [users, setUsers] = useState<UserType[]>([])
    const [prices, setPrices] = useState<PricesType>({
        minPrice: 0,
        maxPrice: 0,
        globalMinPrice: 0,
        globalMaxPrice: 0,
    })
    const [loading, setLoading] = useState(true)
    const [isChangeLoading, setIsChangeLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    useEffect(() => {
        const getUsers = async () =>
            await userService
                .users({ role, status, city, genre, query, verified, sort })
                .then(res => {
                    const userData: UserType[] = res.data.sort(
                        (user: UserType) => (user.role === "admin" ? -1 : 0)
                    )

                    if (search && search.length)
                        setUsers(getFuseUsers(userData, search, ["fullName"]))
                    else setUsers(userData)

                    setPrices({
                        minPrice: getMinMaxPrices(userData).minPrice,
                        maxPrice: getMinMaxPrices(userData).maxPrice,
                        globalMinPrice: getMinMaxPrices(userData).minPrice,
                        globalMaxPrice: getMinMaxPrices(userData).maxPrice,
                    })

                    setLoading(false)
                    setIsChangeLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setErrorMessage(err.response.data.message)
                })

        getUsers()
        if (isChangeLoading || loading) getUsers()
    }, [
        search,
        role,
        status,
        loading,
        isChangeLoading,
        city,
        genre,
        query,
        verified,
        sort,
    ])

    return {
        users,
        prices,
        setPrices,
        loading,
        errorMessage,
        isChangeLoading,
        setIsChangeLoading,
    }
}
