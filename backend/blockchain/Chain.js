const Block = require('./Block.js');

// Chain represents the blockchain itself – a list of linked blocks
class Chain {

    // Create the first block in the chain (the Genesis Block)
    createGenesisBlock() {
        // TODO: Return a new Block instance with:
        // - index = 0
        // - timestamp = current time (Date.now())
        // - data = "This is a genesis block"
        // - prevHash = "0"
    }

    constructor() {
        // Initialize the chain with just the genesis block
        this.chain = [this.createGenesisBlock()];
    }

    // Get the most recently added block in the chain
    getLatestBlock() {
        // TODO: Return the last block in the chain array
    }

    // Add a new block to the chain
    addBlock(newBlock) {
        // TODO:
        // 1. Set the new block's prevHash to the hash of the latest block
        // 2. Recalculate the new block's hash (in case the prevHash changed)
        // 3. Push the new block into the chain
    }

    // Check if the current blockchain is valid
    isValidChain() {
        // TODO:
        // 1. Check if the first block is the same as a freshly created genesis block
        //    - Use JSON.stringify to compare both blocks
        // 2. Iterate through the chain (starting from index 1) and for each block:
        //    - Check if current block's prevHash matches previous block's hash
        //    - Check if current block's hash is still valid using calcHash()

        // Return true if all checks pass, false otherwise
    }
}

module.exports = Chain;
