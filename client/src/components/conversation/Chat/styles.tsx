/*=============================================== Chat styles ===============================================*/

import styled from "styled-components"

import { COLORS, Mixins, RADIUSES, SPACERS, Linkify } from "components"
import type { MessageTypeType } from "components/conversation/Chat/types"

const HEIGHT = `calc(100vh - ${SPACERS.L} - 36px - 70px - ${SPACERS.XXL} - ${SPACERS.M} - ${SPACERS.L})`

export const StyledChat = styled.div`
    height: ${HEIGHT};
    border: 1px solid ${COLORS.GRAY_ACTIVE};
    border-radius: ${RADIUSES.M};
    flex-grow: 1;
    padding: ${SPACERS.S};
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "xs",
    })}
`

export const MessagesContainer = styled.div<{ $isEmpty: boolean }>``

export const Bubble = styled(Linkify)<{ $type: MessageTypeType }>``

export const ChatForm = styled.form``

export const Textarea = styled.textarea``
