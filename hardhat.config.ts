import { HardhatUserConfig } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";
require("hardhat-contract-sizer");
import dotenv from "dotenv";
dotenv.config();

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
        "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
      ],
      chainId: 31337,
    },
    avalanche_mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""],
    },
    fuji_testnet: {
      url: "https://api.zan.top/avax-fuji/ext/bc/C/rpc",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""],
    },
  },
  etherscan: {
    apiKey: "",
  },
};

export default config;