import { deployContracts } from "../../deployScripts/sample.deployScript";

async function main() {
	await deployContracts();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
