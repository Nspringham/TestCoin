const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
        //this will return a string of a hash of the combined index, prevHash, timestamp and data
    }
}

class Blockchain{
    constructor(){
        //this is responsible for initializing the blockchain
        this.chain = [this.createGenesisBlock()];
        //this property chain will be an array of blocks with the manually made genesisBlock
    }

    createGenesisBlock(){
        return new Block(0, "30/01/2018", "Genesis Block", "0")
    }

    getLatestBlock(){
        
    }

    addBlock(){

    }
}
