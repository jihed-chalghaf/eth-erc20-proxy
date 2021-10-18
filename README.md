# Ethereum-Proxy
Testing OpenZeppelin's proxy-logic pattern on the ERC20 contract.

## Logic contract (ERC20)
Logic contract should move the code within the constructor to a regular `initializer` function, and have this function be called whenever the proxy links to this logic contract. This function should be called only once by the Proxy, hence the use of the `initializer` modifier.

## Prerequisites
1. Install the node packages.
```bash
npm install
```
2. Set up Truffle config file to point out to your preferred network.

## Testing
1. Compile the contracts.
```bash
$ truffle compile
```
2. Migrate the contracts to the network.
```bash
$ truffle migrate --reset
```
3. Test the contracts.
```bash
$ truffle test
```