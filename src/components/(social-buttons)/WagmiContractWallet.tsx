"use client";
import React, { useState } from "react";
import {
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
} from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

const connector = new GoogleSocialWalletConnector({
  options: {
    projectId: process.env.ZERODEV_PROJECT_ID,
  },
});

const WagmiContractWallet = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const handleDisconnect = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      disconnect();
    };

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GoogleSocialWalletConnector({
          options: {
            projectId: defaultProjectId,
          },
        }),
      });
      setLoading(false);
    };

    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector?.name}</div>
          <a
            href={`${chain?.blockExplorers?.default.url}/address/${address}`}
            target="_blank"
          >
            Explorer
          </a>
          <br />
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      );
    }
    return (
      <button
        className={`px-4 py-2 rounded-md mt-4 font-semibold text-white transition duration-500 ease-in-out transform bg-slate-800 hover:bg-slate-700`}
        disabled={isLoading || loading}
        onClick={connectWallet}
      >
        {isLoading || loading ? "loading..." : "Connect to Google"}
      </button>
    );
  };
  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
};

export default WagmiContractWallet;
