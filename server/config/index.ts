/*=============================================== Config ===============================================*/

import express, { type Application } from "express"
import logger from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import { ORIGIN } from "../utils/consts"

const config = (app: Application) => {
    app.set("trust proxy", 1)

    app.use(
        cors({
            credentials: true,
            origin: ORIGIN,
        })
    )

    app.use(logger("dev"))

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
}

export default config
