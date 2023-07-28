/*=============================================== MyAccountAside ===============================================*/

import { Avatar, Button } from "components"
import { PATHS } from "data"

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export const MyAccountAside = ({ user, isLoading }: MyAccountSectionsProps) => {
    return (
        <>
            <Avatar
                src={user?.avatar}
                size={150}
                isLoading={isLoading}
                username={user?.fullName}
            />

            <Button to={PATHS.EDIT_ACCOUNT}>Edit your account</Button>

            {user?.role === "artist" && (
                <Button
                    to={PATHS.ARTIST(user?._id)}
                    variant="transparent"
                    noPadding
                >
                    See your page
                </Button>
            )}
        </>
    )
}
