/*=============================================== Image types ===============================================*/

import type { HTMLAttributes, ImgHTMLAttributes } from "react"

import type { ObjectFitType, RadiusesType } from "components/types"

export interface ImageProps
    extends HTMLAttributes<HTMLImageElement>,
        ImgHTMLAttributes<HTMLImageElement> {
    fit?: ObjectFitType
    borderRadius?: RadiusesType
    src?: string
}
