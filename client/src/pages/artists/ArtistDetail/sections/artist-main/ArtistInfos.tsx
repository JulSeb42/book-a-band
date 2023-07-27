/*=============================================== ArtistInfos ===============================================*/

import { generateNumbers, convertPrice } from "ts-utils-julseb"

import { Text, TextIcon, Skeleton, SkeletonCard } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/artist-sections-types"

type InfoType = {
    id: number
    icon: string
    title: string
    content: string
}

export const ArtistInfos = ({ artist, isLoading }: ArtistSectionProps) => {
    const infos: InfoType[] = [
        {
            id: 0,
            icon: "map",
            title: "Location",
            content: artist?.city,
        },
        {
            id: 1,
            icon: "euro",
            title: "Price",
            content: artist?.price
                ? convertPrice(artist?.price).replace(",00", "")
                : "-",
        },
        {
            id: 2,
            icon: "music",
            title: "Genre",
            content: artist?.genre || "-",
        },
    ]

    if (isLoading)
        return generateNumbers(0, infos.length).map(n => (
            <SkeletonCard alignItems="center" gap="xxs" isShining key={n}>
                <Skeleton width={16} height={16} />
                <Skeleton height={24} width="40%" />
            </SkeletonCard>
        ))

    return infos.map(({ id, icon, title, content }) => (
        <TextIcon icon={icon} key={id}>
            <Text tag="strong">{title}: </Text>
            {content}
        </TextIcon>
    ))
}
