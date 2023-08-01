/*=============================================== MessagesContainer ===============================================*/

import { useState, useEffect, useContext, useRef } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Hr } from "components"
import { SendMessage } from "components/conversation/Chat/SendMessage"
import { MessagesList } from "components/conversation/Chat/MessagesList"
import type { MessageType, WhichUserType } from "types"

import {
    StyledChat,
    StyledMessagesContainer,
    StyledButton,
    // Bottom,
} from "components/conversation/Chat/styles"
import type { ChatProps } from "components/conversation/Chat/types"

interface MessagesContainerProps {

}

export const MessagesContainer = ({ }: MessagesContainerProps) => {
    return (
        <div>

        </div>
    )
}
