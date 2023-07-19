/*=============================================== Text types ===============================================*/

import type { ReactNode } from "react"

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

export type TextTagsTypes = keyof typeof tags

export interface TextProps {
    children?: ReactNode | ReactNode[]
    tag?: TextTagsTypes
}
