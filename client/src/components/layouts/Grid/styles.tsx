/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"
import type {
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "components/types"

export const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: number | string
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
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
