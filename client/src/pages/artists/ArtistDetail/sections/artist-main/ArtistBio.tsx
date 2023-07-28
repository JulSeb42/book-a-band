/*=============================================== ArtistBio ===============================================*/

import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import { generateNumbers } from "ts-utils-julseb"

import { Flexbox, Skeleton, SkeletonCard, Mixins, Text } from "components"
import { optionsMarkdown } from "config"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export const ArtistBio = ({ artist, isLoading }: ArtistSectionProps) => {
    if (isLoading) return <ArtistBioSkeleton />

    if (artist?.bio === "" || !artist?.bio)
        return <Text>{artist?.fullName} did not write a bio yet.</Text>

    return (
        <StyledMarkdown options={optionsMarkdown}>{artist?.bio}</StyledMarkdown>
    )
}

const StyledMarkdown = styled(Markdown)`
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "s",
    })}
`

const ArtistBioSkeleton = () => {
    return (
        <Flexbox flexDirection="column" gap="s" alignItems="stretch">
            {generateNumbers(0, 4).map(n => (
                <SkeletonCard
                    isShining
                    flexDirection="column"
                    gap="xxs"
                    key={n}
                >
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="90%" />
                    <Skeleton height={20} width="85%" />
                </SkeletonCard>
            ))}
        </Flexbox>
    )
}
