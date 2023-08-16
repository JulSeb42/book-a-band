/*=============================================== UserLineDashboard styles ===============================================*/

import styled from "styled-components"

import { Mixins, SPACERS, Text } from "components"

export const StyledUserLineDashboard = styled.div`
    ${Mixins.Flexbox({
        justifyContent: "space-between",
        gap: "s",
    })}
`

export const UserInfo = styled.div`
    width: 100%;
    max-width: calc(100% - ${SPACERS.XS} - 40%);
    ${Mixins.Flexbox({ gap: "xs" })}
`

export const NameContainer = styled.div`
    width: 100%;
    max-width: calc(100% - 32px - ${SPACERS.XS});
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
    })}
`

export const Name = styled(Text).attrs({ tag: "h6", maxLines: 1 })`
    width: 100%;
    max-width: 100%;
    line-height: 32px;
`

export const StyledRightContainer = styled.div`
    width: 40%;
    max-width: 200px;
    ${Mixins.Flexbox({
        gap: "s",
        justifyContent: "flex-end",
    })}
`
