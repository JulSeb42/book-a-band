/*=============================================== Nav link types ===============================================*/

type BaseLinkType = {
    text: string
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
