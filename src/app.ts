import express from "express"
import router from "./route"
import cors from "cors"

function createApp() {
    const app = express()

    app.use(express.json())
    app.use("/api", router)
    
    const corsOptions = {
        origin: ["http://www.edilson.system.com", 'http://gov.br'],
        method: ["GET", "POST", "PUT", "DELETE"],
    }

    app.use(cors(corsOptions))

    return app
}

export default createApp


