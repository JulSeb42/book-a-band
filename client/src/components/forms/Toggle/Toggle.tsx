/*=============================================== Toggle component ===============================================*/

import { StyledToggle, Input } from "components/forms/Toggle/styles"
import type { ToggleProps } from "components/forms/Toggle/types"

export function Toggle({ checked, onChange, label, id, ...rest }: ToggleProps) {
    return (
        <StyledToggle htmlFor={id}>
            <Input
                type="checkbox"
                onChange={onChange}
                checked={checked}
                id={id}
                {...rest}
            />

            {label}
        </StyledToggle>
    )
}
