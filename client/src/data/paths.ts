/*=============================================== Paths ===============================================*/

export const PATHS = {
    ROOT: "/",

    ARTISTS: "/artists",
    ARTIST: (id = ":id") => `/artists/${id}`,

    SIGNUP: "/signup",
    THANK_YOU: "/signup/thank-you",
    VERIFY: "/verify/:token/:id",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/login/forgot-password",
    FORGOT_PASSWORD_SENT: "/login/forgot-password/email-sent",
    RESET_PASSWORD: "/reset-password/:token/:id",
    GOODBYE: "/goodbye",

    MY_ACCOUNT: "/my-account",
    EDIT_ACCOUNT: "/my-account/edit",
    EDIT_PASSWORD: "/my-account/edit-password",
    CONVERSATION: (id = ":id") => `/conversations/${id}`,
}

export const SERVER_PATHS = {
    AUTH: "/auth",
    UPLOADER: "/uploader",
    USERS: "/users",
    CONVERSATION: "/conversation",
    MESSAGE: "/message",
}
