# express-backend-api-example
A simple example of an ExpressJS Backend API, using crypto data from CoinGecko.  
Demonstrating Routing, Controllers, and API Calls with authorization.

# Background & Usage
This is meant to be a quick example of an Express Backend  
that also handles making requests to an external Web API,  
for myself, or whoever, to reference

Currently, there is only one defined endpoint `/listings/trendingLatest`   
This route makes an API call to CoinGecko and responds with the top 15 trending  
coins and their prices, from within the last 24 hours.

# Setup

### Prerequisites
- NodeJS
- npm
- CoinGecko Account

### Installation & Usage

#### Clone The Repo
```
git clone https://github.com/MosesSimms/express-backend-api-example.git
```

#### Install Dependencies
```
npm install
```
#### Create `.env` file in the root and store your CoinGecko API Key
```
API_KEY="Your Key"
```
#### Run Server
```
npm start
```
