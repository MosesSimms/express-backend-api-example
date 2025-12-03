/*
    API Controller for List Endpoints
*/

import axios from "axios"

export async function trendingLatest(apiKey) {

    const res = await axios({
        url: "https://api.coingecko.com/api/v3/search/trending",
        headers: {
            "x-cg-demo-api-key": apiKey
        }
    })

    return await res.data
}