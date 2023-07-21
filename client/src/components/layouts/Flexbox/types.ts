/*=============================================== Flexbox types ===============================================*/

import type { ReactNode, ElementType, HTMLAttributes } from "react"
import type {
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    SpacersTypes,
} from "components/types"

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    inline?: boolean
    flexDirection?: FlexDirectionTypes
    flexWrap?: FlexWrapTypes
    justifyContent?: FlexJustifyContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyItems?: FlexJustifyItemsTypes
    alignContent?: FlexAlignContentTypes
    gap?: SpacersTypes
    columnGap?: SpacersTypes
    rowGap?: SpacersTypes
}
