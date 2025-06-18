const express = require('express');
const Block = require('./blockchain/Block.js');
const Chain = require('./blockchain/Chain.js');
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.port || 3005;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Initialize a new blockchain instance
let chain = new Chain();

// Root route: basic test endpoint
app.get('/', (req, res) => {
    // TODO: Respond with a simple message like "blockchain home page"
});

// Route to add a new block to the chain
app.post('/addBlock', (req, res) => {
    const { data } = req.body;

    // TODO: Check if 'data' is provided in the request body
    // If not, respond with status 400 and an error message

    // TODO:
    // 1. Create a new Block using:
    //    - index = latest block index + 1
    //    - timestamp = current time
    //    - data = from request
    //    - prevHash = hash of the latest block
    //
    // 2. Add the new block to the chain using chain.addBlock()
    //
    // 3. Respond with status 200 and a message + the new block's data
});

// Route to get the entire blockchain
app.get('/getChain', (req, res) => {
    // TODO: Respond with the full chain (chain.chain)
});

// Route to get the latest block in the chain
app.get('/getLatestBlock', (req, res) => {
    // TODO: Respond with the result of chain.getLatestBlock()
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // TODO: Log a message saying the blockchain API is running and on which port
});
