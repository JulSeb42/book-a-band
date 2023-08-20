/*=============================================== ArtistAvailabilities ===============================================*/

import { Fragment } from "react"
import { generateNumbers, convertDateShort } from "ts-utils-julseb"

import { Skeleton, TextIcon, Text } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export function ArtistAvailabilities({
    artist,
    isLoading,
}: ArtistSectionProps) {
    if (isLoading) return <ArtistAvailabilitiesSkeleton />

    if (!artist?.available.length)
        return <Text>{artist?.fullName} did not add any date yet.</Text>

    return artist?.available.map(date => (
        <TextIcon icon="chevron-right" key={date}>
            {convertDateShort(new Date(date))}
        </TextIcon>
    ))
}

function ArtistAvailabilitiesSkeleton() {
    return (
        <Fragment>
            {generateNumbers(0, 4).map(n => (
                <Skeleton height={24} width="80%" isShining key={n} />
            ))}
        </Fragment>
    )
}
