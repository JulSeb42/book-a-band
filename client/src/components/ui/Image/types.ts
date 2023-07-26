/*=============================================== Image types ===============================================*/

import type { HTMLAttributes, ImgHTMLAttributes } from "react"

import type { ObjectFitTypes, RadiusesTypes } from "components/types"

export interface ImageProps
    extends HTMLAttributes<HTMLImageElement>,
        ImgHTMLAttributes<HTMLImageElement> {
    fit?: ObjectFitTypes
    borderRadius?: RadiusesTypes
    src?: string
}
