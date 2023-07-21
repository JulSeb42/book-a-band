/*=============================================== Icon types ===============================================*/

import type { Props as SVGProps } from "react-inlinesvg"
import type { ColorsTypes } from "components/types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: ColorsTypes
}
