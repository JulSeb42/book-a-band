/*=============================================== Error handling ===============================================*/

import type { Application, Request, Response } from "express"

export const errorHandler = (app: Application) => {
    app.use((_: null, res: any) => {
        res.status(404).json({ errorMessage: "This route does not exist" })
    })

    app.use((err: Error, req: Request, res: Response) => {
        console.error("ERROR", req.method, req.path, err)

        if (!res.headersSent) {
            res.status(500).json({
                errorMessage: "Internal server error. Check the server console",
            })
        }
    })
}
