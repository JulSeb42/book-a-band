/*=============================================== Get icon size ===============================================*/

import type { TextTagsTypes } from "components/ui/Text/types"

export const getIconSize = (tag: TextTagsTypes) => {
    switch (tag) {
        case "h1":
            return 40
        case "h2":
            return 32
        case "h3":
            return 28.8
        case "h4":
            return 24
        case "h5":
            return 20.8
        case "h6":
            return 17.6
        case "small":
            return 14
        default:
            return 16
    }
}
