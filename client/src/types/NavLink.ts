/*=============================================== Nav link types ===============================================*/

import type { UserRoleType } from "./User"

type BaseLinkType = {
    id: number
    text: string
    role?: UserRoleType
}

type NavLinkTypeLink = BaseLinkType & {
    to: string
    end?: boolean
    onClick?: never
}

type NavLinkTypeButton = BaseLinkType & {
    to?: never
    end?: never
    onClick: () => void
}

export type NavLinkType = NavLinkTypeLink | NavLinkTypeButton
