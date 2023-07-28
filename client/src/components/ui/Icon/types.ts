/*=============================================== Icon types ===============================================*/

import type { Props as SVGProps } from "react-inlinesvg"
import type { ColorsType } from "components/types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: ColorsType
}
