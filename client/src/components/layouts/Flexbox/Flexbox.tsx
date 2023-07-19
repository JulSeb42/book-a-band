/*=============================================== Flexbox component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { variableSpacer } from "components"

import { StyledFlexbox } from "components/layouts/Flexbox/styles"
import type { FlexboxProps } from "components/layouts/Flexbox/types"

export const Flexbox = forwardRef(
    (
        {
            as,
            children,
            inline,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            justifyItems,
            alignContent,
            gap,
            columnGap,
            rowGap,
            style,
            className,
            ...rest
        }: FlexboxProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledFlexbox
                as={as}
                ref={ref}
                className={classNames({ inline }, className)}
                style={{
                    ["--flex-column-gap" as any]: variableSpacer(
                        columnGap ? columnGap : gap ? gap : null
                    ),
                    ["--flex-row-gap" as any]: variableSpacer(
                        rowGap ? rowGap : gap ? gap : null
                    ),
                    ...style,
                }}
                data-flex-direction={flexDirection}
                data-flex-wrap={flexWrap}
                data-justify-content={justifyContent}
                data-justify-items={justifyItems}
                data-align-content={alignContent}
                data-align-items={alignItems}
                {...rest}
            >
                {children}
            </StyledFlexbox>
        )
    }
)
