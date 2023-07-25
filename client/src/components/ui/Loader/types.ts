/*=============================================== Loader types ===============================================*/

import type { ElementType } from "react"

import type { ColorsTypes } from "components/types"

export interface LoaderProps {
    as?: ElementType
    size?: number
    color?: ColorsTypes
}
