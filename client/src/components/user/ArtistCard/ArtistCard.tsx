/*=============================================== ArtistCard component ===============================================*/

import { Link } from "react-router-dom"
import { convertDateShort, convertPrice } from "ts-utils-julseb"

import { Text, TextIcon, Avatar, Button, Flexbox } from "components"
import { PATHS } from "data"

import {
    StyledArtistCard,
    CardContent,
    TextIconContainer,
} from "components/user/ArtistCard/styles"
import type {
    ArtistCardProps,
    ArtistInfoType,
} from "components/user/ArtistCard/types"

export const ArtistCard = ({ artist }: ArtistCardProps) => {
    const { _id, fullName, city, genre, available, price } = artist

    const path = PATHS.ARTIST(_id)

    const infos: ArtistInfoType[] = [
        {
            id: 0,
            title: "Genre",
            value: genre || "-",
        },
        {
            id: 1,
            title: "Next availability",
            value: convertDateShort(new Date(available[0])) || "-",
        },
        {
            id: 2,
            title: "Price",
            value: convertPrice(price).replace(",00", "") || "-",
        },
    ]

    return (
        <StyledArtistCard>
            <Avatar user={artist} isLink />

            <CardContent>
                <Flexbox alignItems="flex-start" justifyContent="space-between">
                    <Text tag="h4" maxLines={1}>
                        <Link to={path}>{fullName}</Link>
                    </Text>

                    <TextIconContainer>
                        <TextIcon icon="map">{city}</TextIcon>
                    </TextIconContainer>
                </Flexbox>

                <Flexbox alignItems="flex-end" justifyContent="space-between">
                    <Flexbox flexDirection="column" gap="xxs">
                        {infos?.map(({ id, title, value }) => (
                            <Text key={id}>
                                <Text tag="strong">{title}: </Text>
                                {value}
                            </Text>
                        ))}
                    </Flexbox>

                    <Button to={path}>See their page</Button>
                </Flexbox>
            </CardContent>
        </StyledArtistCard>
    )
}
