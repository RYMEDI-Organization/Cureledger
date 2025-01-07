# Cureledger Smart Contract

## Project Setup
- First clone the repo (https://github.com/RYMEDI-Organization/Cureledger)
- cd Cureledger
- npm i 
- Create a .env on repo root directory and make a variable PRIVATE_KEY
#### For compiling the smart contract
- npx hardhat clean
- npx hardhat compile
#### For Running the test cases 
- npx hardhat test 
#### For Contract deployment on networks
- npx hardhat run scripts/deploy.ts --network fuji_testnet
