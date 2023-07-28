/*=============================================== MyAccountHeader ===============================================*/

import { Skeleton, Text, TextIcon } from "components"

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export const MyAccountHeader = ({
    user,
    isLoading,
}: MyAccountSectionsProps) => {
    if (isLoading)
        return (
            <>
                <Skeleton height={60} width="70%" isShining />
                <Skeleton height={24} width="30%" isShining />
            </>
        )

    return (
        <>
            <Text tag="h1">Hello {user?.fullName}</Text>

            <TextIcon icon="map">
                <Text tag="strong">City: </Text>
                {user?.city}
            </TextIcon>

            {!user?.verified && <Text>Your account is not verified!</Text>}

            {user?.role === "artist" && (
                <Text>
                    Your account is {user?.isVisible ? "" : "not "}
                    visible.
                </Text>
            )}
        </>
    )
}
