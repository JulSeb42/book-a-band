/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"
import type {
    GridAlignContentType,
    GridAlignItemsType,
    GridJustifyContentType,
    GridJustifyItemsType,
    SpacersType,
} from "components/types"

export const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: number | string
    $gap?: SpacersType
    $columnGap?: SpacersType
    $rowGap?: SpacersType
    $justifyItems?: GridJustifyItemsType
    $alignItems?: GridAlignItemsType
    $justifyContent?: GridJustifyContentType
    $alignContent?: GridAlignContentType
}>`
    ${({
        $inline,
        $col,
        $gap,
        $columnGap,
        $rowGap,
        $justifyItems,
        $alignItems,
        $justifyContent,
        $alignContent,
    }) =>
        Mixins.Grid({
            inline: $inline,
            col: $col,
            gap: $gap,
            columnGap: $columnGap,
            rowGap: $rowGap,
            justifyItems: $justifyItems,
            alignItems: $alignItems,
            justifyContent: $justifyContent,
            alignContent: $alignContent,
        })}
`
