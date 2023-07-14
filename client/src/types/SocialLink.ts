/*=============================================== Social link type ===============================================*/

const sites = {
    instagram: "instagram",
    facebook: "facebook",
    youtube: "youtube",
} as const

export type SocialSitesTypes = keyof typeof sites

export type SocialLinkType = {
    site: SocialSitesTypes
    url: string
}
