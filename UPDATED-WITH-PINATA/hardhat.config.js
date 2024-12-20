require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_POS_RPC = "https://rpc.cardona.zkevm-rpc.com";
const NEXT_PUBLIC_PRIVATE_KEY =
  "e714006f3171159e8a69c4b1baaca741dfea00ae042a97dd7843c7d0420e6271";

// const NEXT_PUBLIC_POLYGON_RPC = "https://polygon-mainnet.infura.io";
// const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_KEY";

/** @type import('hardhat/config').HardhatUserConfig */

// Connect to the real blockchain network
// module.exports = {
//   solidity: "0.8.9",
//   defaultNetwork: "ETH",
//   networks: {
//     hardhat: {},
//     polygon_pos: {
//       url: NEXT_PUBLIC_POLYGON_POS_RPC,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//     // polygon: {
//     //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
//     //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     // },
//   },
// };

// Connect to local blockchain network
module.exports = {
  solidity: "0.8.9",
};
