/*=============================================== Hr component ===============================================*/

import styled from "styled-components"

import { COLORS, RADIUSES } from "components"

interface HrProps {
    className?: string
}

export const Hr = ({ className }: HrProps) => {
    return <StyledHr className={className} />
}

const StyledHr = styled.hr`
    border: none;
    width: 100%;
    height: 1px;
    background-color: ${COLORS.GRAY_ACTIVE};
    border-radius: ${RADIUSES.ROUND};
    margin: 0;
`
