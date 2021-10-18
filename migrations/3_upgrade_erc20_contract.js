const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const ERC20 = artifacts.require('ERC20');
const ERC20_V2 = artifacts.require('ERC20V2');

module.exports = async function (deployer) {
    const existing = await ERC20.deployed();
    const instance = await upgradeProxy(existing.address, ERC20_V2, { deployer });
    console.log('Upgraded', instance.address);
  };