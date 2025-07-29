// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("Deploying contract to Sepolia...");

  // Compile and deploy the contract
  const ContractFactory = await hre.ethers.getContractFactory("NILTransparencyContract");
  const contract = await ContractFactory.deploy();

  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log(`✅ Contract deployed to: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });

