const { deployProxy } = require('@openzeppelin/truffle-upgrades');

var ERC20 = artifacts.require("ERC20.sol");

module.exports = async function (deployer) {
  const instance = await deployProxy(ERC20, ["ERC20", "ERC"], { deployer });
  console.log('Deployed', instance.address);
};