const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const ERC20 = artifacts.require('ERC20');
const ERC20_V2 = artifacts.require('ERC20V2');


describe('metadata', () => {
  it('name', async () => {
    const erc20 = await deployProxy(ERC20, ["ERC20", "ERC"]);

    const name = await erc20.name();
    assert.equal(name, 'ERC20');
  });
  it('symbol', async () => {
    const erc20 = await deployProxy(ERC20, ["ERC20", "ERC"]);

    const symbol = await erc20.symbol();
    assert.equal(symbol, 'ERC');
  });
  it('decimals', async () => {
    const erc20 = await deployProxy(ERC20, ["ERC20", "ERC"]);

    const decimals = await erc20.decimals();
    assert.equal(decimals, 18);
  });
});
describe('upgrades', () => {
  it('works', async () => {
    const erc20 = await deployProxy(ERC20, ["ERC20", "ERC"]);
    const erc20_v2 = await upgradeProxy(erc20.address, ERC20_V2);

    const name = await erc20_v2.name();
    assert.equal(name, 'ERC20');
  });
  it('decimals update', async () => {
    const erc20 = await deployProxy(ERC20, ["ERC20", "ERC"]);

    const decimals = await erc20.decimals();
    assert.equal(decimals.toString(), '18');

    const erc20_v2 = await upgradeProxy(erc20.address, ERC20_V2);

    const decimals_v1 = await erc20.decimals();
    assert.equal(decimals_v1.toString(), '17');
    const decimals_v2 = await erc20_v2.decimals();
    assert.equal(decimals_v2.toString(), '17');
  });
});