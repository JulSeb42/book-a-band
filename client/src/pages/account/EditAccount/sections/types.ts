/*=============================================== Edit account props ===============================================*/

import type { UserType, ValidationStatusType } from "types"

export interface EditAccountSectionProps {
    user: UserType
    isLoading: boolean
}

export type EditAccountMainInputType = {
    fullName: string
    genre: string
    price: number
    facebookUrl: string
    instagramUrl: string
    youtubeUrl: string
}

export type EditAccountYoutubeLinksType = {
    youtube1: string
    youtube2: string
    youtube3: string
}

export type EditAccountValidationType = {
    fullName: ValidationStatusType
    city: ValidationStatusType
}
