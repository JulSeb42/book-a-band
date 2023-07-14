/*=============================================== ArtistCard component ===============================================*/

import { Link } from "react-router-dom"
import {
    Avatar,
    Text,
    Flexbox,
    TextIcon,
    Button,
    uuid,
    convertPrice,
    convertDateShort,
} from "tsx-library-julseb"

import { PATHS } from "data"

import {
    StyledArtistCard,
    CardContent,
    TextIconContainer,
} from "components/artist/ArtistCard/styles"
import type {
    ArtistCardProps,
    ArtistInfoType,
} from "components/artist/ArtistCard/types"

export const ArtistCard = ({ artist }: ArtistCardProps) => {
    const artistPath = PATHS.ARTIST(artist?._id)

    const filteredDates = artist?.available?.filter(
        date => new Date(date) >= new Date()
    )
    const sortedDates = filteredDates.sort((a, b) =>
        new Date(a) < new Date(b) ? -1 : 0
    )

    const infos: ArtistInfoType[] = [
        {
            title: "Genre",
            value: artist?.genre || "-",
        },
        {
            title: "Next availability",
            value: convertDateShort(new Date(sortedDates[0])) || "-",
        },
        {
            title: "Price",
            value: convertPrice(artist.price).replace(",00", "") || "-",
        },
    ]

    return (
        <StyledArtistCard>
            <Link to={artistPath}>
                <Avatar
                    img={artist?.avatar}
                    alt={`Avatar ${artist?.fullName}`}
                    size={120}
                />
            </Link>

            <CardContent>
                <Flexbox alignItems="flex-start" justifyContent="space-between">
                    <Text tag="h4">
                        <Link to={artistPath}>{artist?.fullName}</Link>
                    </Text>

                    <TextIconContainer>
                        <TextIcon icon="map">{artist?.city}</TextIcon>
                    </TextIconContainer>
                </Flexbox>

                <Flexbox alignItems="flex-end" justifyContent="space-between">
                    <Flexbox flexDirection="column" gap="xxs">
                        {infos?.map(i => (
                            <Text key={uuid()}>
                                <Text tag="strong">{i.title}: </Text>
                                {i.value}
                            </Text>
                        ))}
                    </Flexbox>

                    <Button to={artistPath}>See their page</Button>
                </Flexbox>
            </CardContent>
        </StyledArtistCard>
    )
}
