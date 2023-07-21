/*=============================================== Form types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
	as?: ElementType
}
