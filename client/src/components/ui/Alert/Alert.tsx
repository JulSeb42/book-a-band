/*=============================================== Alert component ===============================================*/

import { Text } from "components"

import { StyledAlert } from "components/ui/Alert/styles"
import type { AlertProps } from "components/ui/Alert/types"

export const Alert = ({ children }: AlertProps) => {
    return (
        <StyledAlert as={typeof children === "string" ? Text : "div"}>
            {children}
        </StyledAlert>
    )
}
