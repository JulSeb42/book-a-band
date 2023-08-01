/*=============================================== Which user ===============================================*/

const whichUser = { user1: "user1", user2: "user2" } as const

export type WhichUserType = keyof typeof whichUser | undefined
