/*=============================================== Common types ===============================================*/

import type { typeValues } from "components/types"

export type ColorsTypes = keyof typeof typeValues.colors
export type ColorsHoverTypes = keyof typeof typeValues.colorsHover
export type OverlaysTypes = keyof typeof typeValues.overlays
export type FontSizesTypes = keyof typeof typeValues.fontSizes
export type FontWeightsTypes = keyof typeof typeValues.fontWeights
export type RadiusesTypes =
    | keyof typeof typeValues.radiuses
    | number
    | {
          topLeft?: keyof typeof typeValues.radiuses | null
          topRight?: keyof typeof typeValues.radiuses | null
          bottomRight?: keyof typeof typeValues.radiuses | null
          bottomLeft?: keyof typeof typeValues.radiuses | null
      }
    | null
export type SpacersTypes = keyof typeof typeValues.spacers | number
export type TextAlignTypes = keyof typeof typeValues.textAlign
export type GridJustifyItemsTypes = keyof typeof typeValues.gridJustifyItems
export type GridAlignItemsTypes = keyof typeof typeValues.gridAlignItems
export type GridJustifyContentTypes = keyof typeof typeValues.gridJustifyContent
export type GridAlignContentTypes = keyof typeof typeValues.gridAlignContent
export type FlexDirectionTypes = keyof typeof typeValues.flexDirection
export type FlexWrapTypes = keyof typeof typeValues.flexWrap
export type FlexJustifyContentTypes = keyof typeof typeValues.flexJustifyContent
export type FlexAlignItemsTypes = keyof typeof typeValues.flexAlignItems
export type FlexJustifyItemsTypes = keyof typeof typeValues.flexJustifyItems
export type FlexAlignContentTypes = keyof typeof typeValues.flexAlignContent
export type ObjectFitTypes = keyof typeof typeValues.objectFit
export type PaddingTypes =
    | SpacersTypes
    | {
          topBottom?: SpacersTypes | null
          leftRight?: SpacersTypes | null
          left?: SpacersTypes | null
          top?: SpacersTypes | null
          right?: SpacersTypes | null
          bottom?: SpacersTypes | null
      }
    | null

export interface BorderProps {
    style?: "solid" | "none"
    width?: number
    color?: ColorsTypes
}

export type PaddingProps = {
    padding?: PaddingTypes
}
