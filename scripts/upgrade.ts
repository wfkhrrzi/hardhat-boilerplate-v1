import { viem } from "hardhat";
import { deployContracts } from "../test/deploy.test";
import DeployContract from "./contract/DeployContract";
import { Config } from "./config/config";
import { getContract } from "viem";

async function main() {
	const DeployContractObject = new DeployContract();

	/**
	 * Upgrade REdacted Staking
	 */
	// await DeployContractObject.deployToChain("REdactedStaking", undefined, 3)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
