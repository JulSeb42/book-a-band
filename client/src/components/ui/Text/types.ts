/*=============================================== Text types ===============================================*/

import type { ReactNode, ElementType, HTMLAttributes } from "react"
import type { ColorsType, TextAlignType } from "components/types"

const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    strong: "strong",
    em: "em",
    small: "small",
    ul: "ul",
} as const

export type TextTagsType = keyof typeof tags

export interface TextProps
    extends HTMLAttributes<
        HTMLHeadingElement & HTMLParagraphElement & HTMLUListElement
    > {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    tag?: TextTagsType
    color?: ColorsType
    maxLines?: number
    textAlign?: TextAlignType
}
