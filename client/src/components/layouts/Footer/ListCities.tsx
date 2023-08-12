/*=============================================== ListCities ===============================================*/

import { Link } from "react-router-dom"
import { generateNumbers, slugify } from "ts-utils-julseb"

import { TextIcon, Text, Skeleton, SkeletonCard } from "components"
import { useCitiesGenres } from "hooks"
import { PATHS, SITE_DATA } from "data"

export const ListCities = () => {
    const { cities, loading, error } = useCitiesGenres()

    if (loading) return <ListCitiesSkeleton />

    if (error.cities)
        return (
            <Text>
                Error while fetching cities:{" "}
                {error.cities.response.data.message}
            </Text>
        )

    return cities
        .filter(city => city !== "All")
        .map(city => (
            <TextIcon icon="chevron-right" key={city}>
                <Link to={`${PATHS.ARTISTS}?city=${slugify(city)}`}>
                    {SITE_DATA.NAME} in {city}
                </Link>
            </TextIcon>
        ))
}

const ListCitiesSkeleton = () => {
    return generateNumbers(0, 4).map(n => (
        <SkeletonCard isShining alignItems="center" gap="xxs" key={n}>
            <Skeleton width={16} height={16} />
            <Skeleton width="20%" height={24} />
        </SkeletonCard>
    ))
}
