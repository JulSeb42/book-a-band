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

export const TabsContainer = ({ children }: TabsContainerProps) => {
    return <StyledTabs>{children}</StyledTabs>
}

export const TabsButtonsContainer = ({
    children,
}: TabsButtonsContainerProps) => {
    return <StyledTabsButtonsContainer>{children}</StyledTabsButtonsContainer>
}

export const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
    return (
        <StyledTabButton onClick={onClick} $isActive={isActive}>
            {children}
        </StyledTabButton>
    )
}

export const Tab = ({ children, isActive }: TabProps) => {
    return <StyledTab $isActive={isActive}>{children}</StyledTab>
}
