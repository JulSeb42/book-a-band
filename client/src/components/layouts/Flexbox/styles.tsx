/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import type {
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    SpacersTypes,
} from "components/types"
import { Mixins } from "components"

export const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
}>`
    ${({
        $inline,
        $flexDirection,
        $flexWrap,
        $justifyContent,
        $alignItems,
        $justifyItems,
        $alignContent,
        $gap,
        $columnGap,
        $rowGap,
    }) =>
        Mixins.Flexbox({
            inline: $inline,
            flexDirection: $flexDirection,
            flexWrap: $flexWrap,
            justifyContent: $justifyContent,
            alignItems: $alignItems,
            justifyItems: $justifyItems,
            alignContent: $alignContent,
            gap: $gap,
            columnGap: $columnGap,
            rowGap: $rowGap,
        })}
`
