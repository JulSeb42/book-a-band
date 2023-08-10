/*=============================================== Bubble ===============================================*/

import { useContext, useState } from "react"
import { convertDateShort } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"

import { Text, Flexbox } from "components"
import { getDateFromIso, getTimeFromIso } from "utils"
import type { MessageType } from "types"

import { StyledBubble } from "components/conversation/Chat/styles"
import type { MessageTypeType } from "components/conversation/Chat/types"

interface BubbleProps {
    message: MessageType
}

export const Bubble = ({ message }: BubbleProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const isoDate = new Date(message?.updatedAt)
    const dateMessage = getDateFromIso(isoDate)
    const today = getDateFromIso(new Date())

    const messageType: MessageTypeType =
        user?._id === message.sender._id ? "sent" : "received"

    const [showTime, setShowTime] = useState(false)

    return (
        <Flexbox
            alignItems={messageType === "sent" ? "flex-end" : "flex-start"}
            flexDirection="column"
        >
            <StyledBubble
                onClick={() => setShowTime(!showTime)}
                $type={messageType}
            >
                {message.body.replaceAll(
                    `
`,
                    "\n"
                )}
            </StyledBubble>

            {showTime && (
                <Text tag="small" color="gray">
                    {dateMessage === today
                        ? "Today"
                        : convertDateShort(new Date(dateMessage))}{" "}
                    at {getTimeFromIso(isoDate)}
                </Text>
            )}
        </Flexbox>
    )
}
