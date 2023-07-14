/*=============================================== InputSkeleton styles ===============================================*/

import styled from "styled-components"
import {
    Text,
    ThemeLight,
    FontWeights,
    SkeletonCard,
    Spacers,
} from "tsx-library-julseb"

export const StyledSkeletonCard = styled(SkeletonCard)`
    width: calc(100% / 2 - 62px - (${Spacers.S} * 2));
    background-color: red;
`

export const Label = styled(Text)`
    color: ${ThemeLight.Primary500} !important;
    font-weight: ${FontWeights.Black} !important;
`
