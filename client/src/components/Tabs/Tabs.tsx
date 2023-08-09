/*=============================================== Tabs component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledTabs } from "components/Tabs/styles"
import type { TabsProps } from "components/Tabs/types"

export const Tabs = forwardRef(
    ({ as }: TabsProps, ref?: ForwardedRef<HTMLDivElement>) => {
		return (
			<StyledTabs ref={ref} as={as}>

			</StyledTabs>
		)
    }
)
