/*=============================================== ArtistCardSkeleton ===============================================*/

import styled from "styled-components"

import { SkeletonCard, Skeleton, Flexbox, SPACERS } from "components"

import { CardContent } from "components/user/ArtistCard/styles"

export const ArtistCardSkeleton = () => {
    return (
        <SkeletonCard gap="s" isShining>
            <Skeleton width={120} height={120} borderRadius="circle" />

            <CardContent>
                <Flexbox alignItems="center" justifyContent="space-between">
                    <Skeleton width="60%" height={36} />
                    <Skeleton width="10%" height={24} />
                </Flexbox>

                <Flexbox alignItems="flex-end" justifyContent="space-between">
                    <InfoContainer flexDirection="column" gap="xxs">
                        <Skeleton width="40%" height={24} />
                        <Skeleton width="30%" height={24} />
                        <Skeleton width="35%" height={24} />
                    </InfoContainer>

                    <Skeleton width={125} height={40} />
                </Flexbox>
            </CardContent>
        </SkeletonCard>
    )
}

const InfoContainer = styled(Flexbox)`
    width: calc(100% - 125px - ${SPACERS.XS});
`
