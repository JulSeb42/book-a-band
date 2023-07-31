/*=============================================== Badge component ===============================================*/

import { StyledBadge } from "components/ui/Badge/styles"
import type { BadgeProps } from "components/ui/Badge/types"

export const Badge = ({ color, size = 8 }: BadgeProps) => {
    return <StyledBadge $color={color} $size={size} />
}
