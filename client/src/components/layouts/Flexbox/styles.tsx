/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { typeValues } from "components/types"
import { generateDataAttributes } from "components"

export const StyledFlexbox = styled.div`
    display: flex;
    column-gap: var(--flex-column-gap);
    row-gap: var(--flex-row-gap);

    &.inline {
        display: inline-flex;
    }

    ${generateDataAttributes(
        "flex-direction",
        Object.keys(typeValues.flexDirection)
    )}

    ${generateDataAttributes("flex-wrap", Object.keys(typeValues.flexWrap))}

    ${generateDataAttributes(
        "justify-content",
        Object.keys(typeValues.flexJustifyContent)
    )}

    ${generateDataAttributes(
        "justify-items",
        Object.keys(typeValues.flexJustifyItems)
    )}

    ${generateDataAttributes(
        "align-content",
        Object.keys(typeValues.flexAlignContent)
    )}

    ${generateDataAttributes(
        "align-items",
        Object.keys(typeValues.flexAlignItems)
    )}
`
