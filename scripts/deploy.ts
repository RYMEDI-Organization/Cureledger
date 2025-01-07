import { ethers } from "hardhat";

async function main() {
  const DeSciLife = await ethers.getContractFactory("DeSciLife");

  const deSciLife = await DeSciLife.deploy();

  await deSciLife.waitForDeployment();

  const contractAddress = await deSciLife.getAddress();

  console.log("Contract deployed to:", contractAddress);
}

main();
