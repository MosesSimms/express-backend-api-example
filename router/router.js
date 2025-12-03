/* 
    Top Level Route Handler
*/
import express from "express"
import listingsRouter from "../router/listingsRouter.js";

const router = express.Router()

// Child Routes
router.use('/listings', listingsRouter)

// Default Route
router.get('/', (req, res) => {
    res.status(200).json({message: "connected"})
})

export default router