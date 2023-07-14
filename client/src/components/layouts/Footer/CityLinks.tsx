/*=============================================== CityLinks ===============================================*/

import { Link } from "react-router-dom"
import {
    useFetch,
    generateNumbers,
    Text,
    TextIcon,
    uuid,
    scrollToTop,
    slugify,
    Skeleton,
    SkeletonCard,
} from "tsx-library-julseb"
import type { AxiosResponse } from "axios"

import { userService } from "api"

import { SITE_DATA, PATHS } from "data"

export const CityLinks = () => {
    const { response, error, loading } = useFetch<AxiosResponse>(
        userService.allCities()
    )
    const cities: string[] = response?.data

    if (loading) return <CityLinksSkeleton />

    if (error) return <Text>Error while fetching cities: {error}</Text>

    return (
        <>
            {cities?.map(city => (
                <TextIcon icon="chevron-right" key={uuid()}>
                    <Link
                        to={`${PATHS.ARTISTS}?city=${slugify(city)}`}
                        onClick={scrollToTop}
                    >
                        {SITE_DATA.NAME} in {city}
                    </Link>
                </TextIcon>
            ))}
        </>
    )
}

const CityLinksSkeleton = () => {
    return (
        <>
            {generateNumbers(0, 4).map(n => (
                <SkeletonCard gap="xxs" alignItems="center" isShiny key={n}>
                    <Skeleton height={16} width={16} />
                    <Skeleton height={24} width={100} />
                </SkeletonCard>
            ))}
        </>
    )
}
