import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from "@thirdweb-dev/react";


export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThirdwebProvider 
  activeChain={{
    // === Required information for connecting to the network === \\
    chainId: 11155111, // Chain ID of the network
    // Array of RPC URLs to use
    rpc: ["https://sepolia.infura.io/v3/"],

    // === Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chains native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "SepoliaETH",
      symbol: "ETH",
    },
    shortName: "SepoliaETH", // Display value shown in the wallet UI
    slug: "SepoliaETH", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "SepoliaETH", // Name of the network
    name: "Sepolia test network", // Name of the network
  }}
  >
  <Component {...pageProps} />
  </ThirdwebProvider>
  )
}