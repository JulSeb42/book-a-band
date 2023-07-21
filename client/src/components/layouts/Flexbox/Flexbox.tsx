/*=============================================== Flexbox component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

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
            ...rest
        }: FlexboxProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledFlexbox
                as={as}
                ref={ref}
                $inline={inline}
                $flexDirection={flexDirection}
                $flexWrap={flexWrap}
                $justifyContent={justifyContent}
                $alignItems={alignItems}
                $justifyItems={justifyItems}
                $alignContent={alignContent}
                $gap={gap}
                $columnGap={columnGap}
                $rowGap={rowGap}
                {...rest}
            >
                {children}
            </StyledFlexbox>
        )
    }
)
