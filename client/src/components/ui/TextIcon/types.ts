/*=============================================== TextIcon types ===============================================*/

import type { ColorsType } from "components/types"
import type { TextProps, TextTagsType } from "components/ui/Text/types"

export interface TextIconProps extends TextProps {
    icon: string
    iconColor?: ColorsType
    tag?: Exclude<TextTagsType, "strong" | "em" | "ul">
}
