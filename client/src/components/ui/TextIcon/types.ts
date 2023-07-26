/*=============================================== TextIcon types ===============================================*/

import type { ColorsTypes } from "components/types"
import type { TextProps } from "components/ui/Text/types"

export interface TextIconProps extends TextProps {
    icon: string
    iconColor?: ColorsTypes
}
