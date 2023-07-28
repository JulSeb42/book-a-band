/*=============================================== Loader types ===============================================*/

import type { ElementType } from "react"

import type { ColorsType } from "components/types"

export interface LoaderProps {
    as?: ElementType
    size?: number
    color?: ColorsType
}
