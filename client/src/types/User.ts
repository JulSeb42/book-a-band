/*=============================================== User ===============================================*/

const roles = { user: "user", artist: "artist" } as const

export type UserRoleType = keyof typeof roles

export type UserType = {
    _id: string
    fullName: string
    email: string
    password: string
    exp: number | string
    verified: boolean
    verifyToken: string
    resetToken: string
    avatar: string
    city: string
    role: UserRoleType
    genre: string
    bio: string
    price: number
    available: string[]
    youtubeUrl: string
    facebookUrl: string
    instagramUrl: string
    youtubeLinks: string[]
    isVisible: boolean
}
