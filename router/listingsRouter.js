import express from "express"
import { trendingLatest } from "../controllers/listingsController.js"

const apiKey = process.env.API_KEY

const listingsRouter = express.Router()

listingsRouter.get('/trendingLatest', (req, res) => {

    trendingLatest(apiKey)
        .then(data => {
            const coinsArr = data.coins.map((coin) => {
                return({
                    coin: coin.item.id,
                    price: coin.item.data.price
                })
            })
            res.json(coinsArr)
        })
})

export default listingsRouter