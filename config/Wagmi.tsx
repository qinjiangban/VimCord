
import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { polygon, sepolia, lineaSepolia, zkSyncSepoliaTestnet } from 'wagmi/chains'
import { walletConnect, injected, metaMask, safe, coinbaseWallet, } from 'wagmi/connectors'
import { defineChain, type Chain } from 'viem'


export const bbtestnet = defineChain({
  id: 18200,
  name: "bbtestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Native Token",
    symbol: "Native Token",
  },
  rpcUrls: {
    default: { http: ["https://rpc.buildbear.io/cute-mistersinister-f90ef39f"] },
  },
  blockExplorers: {
    default: {
      name: "BBExplorer",
      url: "https://explorer.buildbear.io/cute-mistersinister-f90ef39f",
    },
  }
})


/* export const projectId = process.env.WEB3MODAL_PROJECT_ID || '1234567890'
if (!projectId) throw new Error('Project ID is not defined') */

export const metadata = {
  name: 'VimCord',
  description: 'VimCord Web Dapp',
  url: 'https://vimcord.coinipfs.com',
  icons: ['/favicon.ico']
}
const MetaMaskOptions = {
  dappMetadata: {
    name: "VimCord dapp",
  },
  infuraAPIKey: process.env.INFURA_API_KEY,
  extensionOnly: true
  // Other options.
};
// 1. Get projectId at https://cloud.walletconnect.com


export const config = createConfig({
  chains: [polygon, bbtestnet, sepolia, lineaSepolia, zkSyncSepoliaTestnet],
  transports: {
    [polygon.id]: http(`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`),
    [bbtestnet.id]: http('https://rpc.buildbear.io/cute-mistersinister-f90ef39f'),
    [sepolia.id]: http(),
    [lineaSepolia.id]: http(),
    [zkSyncSepoliaTestnet.id]: http(),
  },


  connectors: [
    metaMask(MetaMaskOptions),
    /*   walletConnect({ projectId, metadata, showQrModal: false }), */
    safe(),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    }),
    injected({ shimDisconnect: true }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})


