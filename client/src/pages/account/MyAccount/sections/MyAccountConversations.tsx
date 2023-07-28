/*=============================================== MyAccountConversations ===============================================*/

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export const MyAccountConversations = ({
    user,
    isLoading,
}: MyAccountSectionsProps) => {
    if (isLoading) return null // TODO: Add skeleton

    return <>{user?.fullName}'s conversations</>
}
