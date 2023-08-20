/*=============================================== Tabs component ===============================================*/

import {
    StyledTabs,
    StyledTabsButtonsContainer,
    StyledTabButton,
    StyledTab,
} from "components/ui/Tabs/styles"
import type {
    TabsContainerProps,
    TabsButtonsContainerProps,
    TabButtonProps,
    TabProps,
} from "components/ui/Tabs/types"

export function TabsContainer({ children }: TabsContainerProps) {
    return <StyledTabs>{children}</StyledTabs>
}

export function TabsButtonsContainer({ children }: TabsButtonsContainerProps) {
    return <StyledTabsButtonsContainer>{children}</StyledTabsButtonsContainer>
}

export function TabButton({ isActive, onClick, children }: TabButtonProps) {
    return (
        <StyledTabButton onClick={onClick} $isActive={isActive}>
            {children}
        </StyledTabButton>
    )
}

export function Tab({ children, isActive }: TabProps) {
    return <StyledTab $isActive={isActive}>{children}</StyledTab>
}
