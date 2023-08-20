/*=============================================== MyAccount ===============================================*/

import { useContext, useState } from "react"

import { AuthContext, type AuthContextType } from "context"

import { Page, Aside, Main, Text, Flexbox } from "components"
import {
    MyAccountHeader,
    MyAccountConversations,
    MyAccountAside,
    SearchConversations,
} from "pages/account/MyAccount/sections"

export function MyAccount() {
    const { user, isLoading } = useContext(AuthContext) as AuthContextType

    const [search, setSearch] = useState("")
    const [read, setRead] = useState<string>("all")

    return (
        <Page title={user?.fullName || "My account"} noMain>
            <Aside gap="s" center>
                <MyAccountAside user={user!} isLoading={isLoading} />
            </Aside>

            <Main size="default">
                <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                    <MyAccountHeader user={user!} isLoading={isLoading} />
                </Flexbox>

                <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                    <Text tag="h3">Conversations</Text>

                    <SearchConversations
                        search={search}
                        setSearch={setSearch}
                        read={read}
                        setRead={setRead}
                    />

                    <Flexbox
                        gap="s"
                        flexDirection="column"
                        alignItems="stretch"
                    >
                        <MyAccountConversations search={search} read={read} />
                    </Flexbox>
                </Flexbox>
            </Main>

            <Aside />
        </Page>
    )
}
