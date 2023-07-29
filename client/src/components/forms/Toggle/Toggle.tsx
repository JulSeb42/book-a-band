/*=============================================== Toggle component ===============================================*/

import { StyledToggle, Input } from "components/forms/Toggle/styles"
import type { ToggleProps } from "components/forms/Toggle/types"

export const Toggle = ({ checked, onChange, label }: ToggleProps) => {
    return (
        <StyledToggle>
            <Input type="checkbox" onChange={onChange} checked={checked} />

            {label}
        </StyledToggle>
    )
}
