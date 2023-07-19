/*=============================================== Grid component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { variableSpacer } from "components"
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
            style,
            className,
            ...rest
        }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledGrid
                as={as}
                ref={ref}
                className={classNames({ inline }, className)}
                style={{
                    ["--grid-template-col" as any]:
                        typeof col === "string" ? col : null,
                    ["--grid-col" as any]: typeof col === "number" ? col : null,
                    ["--grid-column-gap" as any]: variableSpacer(
                        columnGap ? columnGap : gap ? gap : null
                    ),
                    ["--grid-row-gap" as any]: variableSpacer(
                        rowGap ? rowGap : gap ? gap : null
                    ),
                    ...style,
                }}
                data-justify-items={justifyItems}
                data-justify-content={justifyContent}
                data-align-content={alignContent}
                data-align-items={alignItems}
                {...rest}
            >
                {children}
            </StyledGrid>
        )
    }
)
