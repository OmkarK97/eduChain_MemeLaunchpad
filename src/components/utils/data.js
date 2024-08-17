import { getDefaultConfig } from "@rainbow-me/rainbowkit";

const Dchain_Testnet = {
    id: 2713017997578000,
    name: 'DCHAIN testnet',
    iconUrl: 'https://chainlist.org/unknown-logo.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io'] },
    },
}

export const Meme_Tokens_List = []

export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
    chains: [Dchain_Testnet],
    ssr: false
});