import express from "express"
import 'dotenv/config'
import cors from "cors"
import router from "./router/router.js"

const PORT = 8000
const app = express()

// Middleware
app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening PORT: ${PORT}`)
})