/*=============================================== Chat component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledChat } from "components/conversation/Chat/styles"
import type { ChatProps } from "components/conversation/Chat/types"

export const Chat = forwardRef(
    ({ as }: ChatProps, ref?: ForwardedRef<HTMLDivElement>) => {
        return <StyledChat ref={ref} as={as}></StyledChat>
    }
)
