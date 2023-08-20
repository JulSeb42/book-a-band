/*=============================================== Get icon size ===============================================*/

import type { TextTagsType } from "components/ui/Text/types"

export const getIconSize = (
    tag: Exclude<TextTagsType, "strong" | "em" | "ul">
) => {
    const tags = new Map<Exclude<TextTagsType, "strong" | "em" | "ul">, number>(
        [
            ["h1", 40],
            ["h2", 32],
            ["h3", 28.8],
            ["h4", 24],
            ["h5", 20.8],
            ["h6", 17.6],
            ["p", 16],
            ["small", 14],
        ]
    )

    return tags.get(tag) || 16
}
