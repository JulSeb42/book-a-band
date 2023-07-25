/*=============================================== Key component ===============================================*/

import { StyledKey } from "components/ui/Key/styles"
import type { KeyProps } from "components/ui/Key/types"

export const Key = ({ keys }: KeyProps) => {
    const keysArr = keys.map(key =>
        key.includes("Key")
            ? key.replace("Key", "")
            : key === "Command"
            ? "⌘"
            : key === "Enter"
            ? "↵"
            : key === "Control"
            ? "Ctrl"
            : key
    )

    return <StyledKey>{keysArr.join("")}</StyledKey>
}
