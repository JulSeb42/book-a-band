/*=============================================== Password styles ===============================================*/

import styled from "styled-components"

import { BaseInputStyles } from "components/forms/InputComponents/styles"

import type { ValidationStatusType } from "types"

export const Input = styled.input<{
    $validation?: ValidationStatusType
    $hasIcon?: boolean
}>`
    ${BaseInputStyles}
`
