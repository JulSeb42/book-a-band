/*=============================================== Common types ===============================================*/

import type { typeValues } from "components/types"

export type ColorsType = keyof typeof typeValues.colors
export type ColorsHoverType = keyof typeof typeValues.colorsHover
export type OverlaysType = keyof typeof typeValues.overlays
export type FontSizesType = keyof typeof typeValues.fontSizes
export type FontWeightsType = keyof typeof typeValues.fontWeights
export type RadiusesType =
    | keyof typeof typeValues.radiuses
    | number
    | {
          topLeft?: keyof typeof typeValues.radiuses | null
          topRight?: keyof typeof typeValues.radiuses | null
          bottomRight?: keyof typeof typeValues.radiuses | null
          bottomLeft?: keyof typeof typeValues.radiuses | null
      }
    | null
export type SpacersType = keyof typeof typeValues.spacers | number
export type TextAlignType = keyof typeof typeValues.textAlign
export type GridJustifyItemsType = keyof typeof typeValues.gridJustifyItems
export type GridAlignItemsType = keyof typeof typeValues.gridAlignItems
export type GridJustifyContentType = keyof typeof typeValues.gridJustifyContent
export type GridAlignContentType = keyof typeof typeValues.gridAlignContent
export type FlexDirectionType = keyof typeof typeValues.flexDirection
export type FlexWrapType = keyof typeof typeValues.flexWrap
export type FlexJustifyContentType = keyof typeof typeValues.flexJustifyContent
export type FlexAlignItemsType = keyof typeof typeValues.flexAlignItems
export type FlexJustifyItemsType = keyof typeof typeValues.flexJustifyItems
export type FlexAlignContentType = keyof typeof typeValues.flexAlignContent
export type ObjectFitType = keyof typeof typeValues.objectFit
export type PaddingType =
    | SpacersType
    | {
          topBottom?: SpacersType | null
          leftRight?: SpacersType | null
          left?: SpacersType | null
          top?: SpacersType | null
          right?: SpacersType | null
          bottom?: SpacersType | null
      }
    | null

export interface BorderProps {
    style?: "solid" | "none"
    width?: number
    color?: ColorsType
}

export type PaddingProps = {
    padding?: PaddingType
}
