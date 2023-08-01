/*=============================================== Chat styles ===============================================*/

import styled from "styled-components"

import {
    COLORS,
    Mixins,
    RADIUSES,
    SPACERS,
    Linkify,
    INPUT_HEIGHT,
    FONT_FAMILY,
    TRANSITIONS,
    FONT_SIZES,
    ButtonIcon,
} from "components"
import type { MessageTypeType } from "components/conversation/Chat/types"

const HEIGHT = `calc(100vh - ${SPACERS.L} - 36px - 70px - ${SPACERS.XXL} - ${SPACERS.M} - ${SPACERS.L})`

export const StyledChat = styled.div`
    height: ${HEIGHT};
    border: 1px solid ${COLORS.GRAY_ACTIVE};
    border-radius: ${RADIUSES.M};
    flex-grow: 1;
    padding: ${SPACERS.S};
    position: relative;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "xs",
    })}
`

export const StyledMessagesContainer = styled.div<{ $isEmpty: boolean }>`
    flex-grow: 1;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ${({ $isEmpty }) =>
        Mixins.Flexbox({
            flexDirection: "column",
            justifyContent: $isEmpty ? "center" : "flex-start",
            alignItems: $isEmpty ? "center" : "stretch",
            gap: "xs",
        })}

    ${Mixins.HideScrollbar}
`

export const Bubble = styled(Linkify)<{ $type: MessageTypeType }>`
    max-width: 60%;
    background-color: ${({ $type }) =>
        $type === "sent" ? COLORS.PRIMARY : COLORS.GRAY_GHOST};
    color: ${({ $type }) => ($type === "sent" ? COLORS.WHITE : COLORS.BLACK)};
    padding: ${SPACERS.XS} ${SPACERS.S};
    border-radius: ${RADIUSES.M};
`

export const ChatForm = styled.form`
    ${Mixins.Flexbox({
        alignItems: "flex-end",
        gap: "xs",
    })}
`

export const Textarea = styled.textarea`
    flex-grow: 1;
    min-height: ${INPUT_HEIGHT}px;
    height: fit-content;
    padding: 0 ${SPACERS.XS};
    font-family: ${FONT_FAMILY};
    border: none;
    border-radius: ${RADIUSES.S};
    outline: none;
    transition: ${TRANSITIONS.SHORT};
    resize: none;
    font-size: ${FONT_SIZES.BODY};
    line-height: ${INPUT_HEIGHT}px;
    max-height: calc(${INPUT_HEIGHT}px * 3 + ${SPACERS.XS});

    &:focus {
        background-color: ${COLORS.PRIMARY_GHOST};
    }
`

export const Bottom = styled.div`
    width: 100%;
    height: 0;
`

export const StyledButton = styled(ButtonIcon)<{
    $isVisible: boolean
}>`
    position: absolute;
    right: ${SPACERS.S};
    bottom: ${SPACERS.XXL};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`
