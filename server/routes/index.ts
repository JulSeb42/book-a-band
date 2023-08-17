/*=============================================== All routes ===============================================*/

import { Router } from "express"

import auth from "./auth"
import users from "./users"
import uploader from "./uploader"
import conversation from "./conversation"
// prependImport

const router = Router()

router.get("/", (_, res) => {
    res.json("All good in here")
})

router.use("/auth", auth)
router.use("/users", users)
router.use("/uploader", uploader)
router.use("/conversation", conversation)
// prependRouterUse

export default router
