/*=============================================== JWT middleware ===============================================*/

import { expressjwt as jwt, type Request } from "express-jwt"

const getTokenFromHeaders = (req: any) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1]
        return token
    }

    return null
}

export const isAuthenticated = jwt({
    secret: process.env.TOKEN_SECRET || "",
    algorithms: ["HS256"],
    requestProperty: "payload",
    getToken: getTokenFromHeaders,
})
