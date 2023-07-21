/*=============================================== Grid component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledGrid } from "components/layouts/Grid/styles"
import type { GridProps } from "components/layouts/Grid/types"

export const Grid = forwardRef(
    (
        {
            as,
            children,
            inline,
            col,
            gap,
            columnGap,
            rowGap,
            justifyItems,
            alignItems,
            justifyContent,
            alignContent,
            ...rest
        }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledGrid
                as={as}
                ref={ref}
                $inline={inline}
                $col={col}
                $gap={gap}
                $columnGap={columnGap}
                $rowGap={rowGap}
                $justifyItems={justifyItems}
                $alignItems={alignItems}
                $justifyContent={justifyContent}
                $alignContent={alignContent}
                {...rest}
            >
                {children}
            </StyledGrid>
        )
    }
)
