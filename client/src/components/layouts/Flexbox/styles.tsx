/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import type {
    FlexAlignContentType,
    FlexAlignItemsType,
    FlexDirectionType,
    FlexJustifyContentType,
    FlexJustifyItemsType,
    FlexWrapType,
    SpacersType,
} from "components/types"
import { Mixins } from "components"

export const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirectionType
    $flexWrap?: FlexWrapType
    $justifyContent?: FlexJustifyContentType
    $alignItems?: FlexAlignItemsType
    $justifyItems?: FlexJustifyItemsType
    $alignContent?: FlexAlignContentType
    $gap?: SpacersType
    $columnGap?: SpacersType
    $rowGap?: SpacersType
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
