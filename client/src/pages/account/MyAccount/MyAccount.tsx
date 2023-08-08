/*=============================================== MyAccount ===============================================*/

import { useContext } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Page, Aside, Main, Text, Flexbox } from "components"
import {
    MyAccountHeader,
    MyAccountConversations,
    MyAccountAside,
} from "pages/account/MyAccount/sections"

export const MyAccount = () => {
    const { user, isLoading } = useContext(AuthContext) as AuthContextType

    return (
        <Page title={isLoading ? "My account" : user?.fullName!} noMain>
            <Aside gap="s" center>
                <MyAccountAside user={user!} isLoading={isLoading} />
            </Aside>

            <Main size="default">
                <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                    <MyAccountHeader user={user!} isLoading={isLoading} />
                </Flexbox>

                <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                    <Text tag="h3">Conversations</Text>

                    <Flexbox
                        gap="xxs"
                        flexDirection="column"
                        alignItems="stretch"
                    >
                        <MyAccountConversations />
                    </Flexbox>
                </Flexbox>
            </Main>

            <Aside />
        </Page>
    )
}
