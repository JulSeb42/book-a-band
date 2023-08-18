/*=============================================== MyAccountAside ===============================================*/

import { Fragment } from "react"

import { Avatar, Button } from "components"
import { PATHS } from "data"

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export function MyAccountAside({ user, isLoading }: MyAccountSectionsProps) {
    return (
        <Fragment>
            <Avatar user={user} size={150} isLoading={isLoading} />

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
        </Fragment>
    )
}
