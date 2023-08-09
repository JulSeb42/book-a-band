/*=============================================== Tabs component ===============================================*/

import { useSearchParams } from "react-router-dom"
import { slugify } from "ts-utils-julseb"

import {
    StyledTabs,
    TabsButtonsContainer,
    TabButton,
    Tab,
} from "components/ui/Tabs/styles"
import type { TabsProps } from "components/ui/Tabs/types"

export const Tabs = ({ tabs, defaultTab }: TabsProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tab = searchParams.get("tab") || defaultTab

    return (
        <StyledTabs>
            <TabsButtonsContainer>
                {tabs.map(({ id, title }) => (
                    <TabButton
                        onClick={() => setSearchParams({ tab: slugify(title) })}
                        $isActive={slugify(tab || "") === slugify(title)}
                        key={id}
                    >
                        {title}
                    </TabButton>
                ))}
            </TabsButtonsContainer>

            {tabs.map(({ id, content, title }) => (
                <Tab $isActive={slugify(tab || "") === slugify(title)} key={id}>
                    {content}
                </Tab>
            ))}
        </StyledTabs>
    )
}
