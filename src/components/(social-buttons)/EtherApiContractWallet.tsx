"use client";
import React, { useState, useMemo } from "react";
import { getZeroDevSigner, getSocialWalletOwner } from "@zerodevapp/sdk";

import { SocialWallet } from "@zerodevapp/social-wallet";

const EtherApiContractWallet = () => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const socialWallet = useMemo(() => {
    return new SocialWallet();
  }, []);

  const createWallet = async () => {
    setLoading(true);
    const signer = await getZeroDevSigner({
      projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string,
      owner: await getSocialWalletOwner(process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string, socialWallet),
    });
    setAddress(await signer.getAddress());
    setLoading(false);
  };

  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress("");
  };

  const connected = !!address;

  return (
    <div>
      {connected && (
        <div>
          <label>Wallet: {address}</label>
        </div>
      )}
      <div>
        {!connected && (
          <button
            onClick={createWallet}
            disabled={loading}
            className={`px-4 py-2 rounded-md mt-4 font-semibold text-white transition duration-500 ease-in-out transform ${
              loading
                ? "opacity-50 cursor-not-allowed bg-slate-900 hover:bg-slate-700"
                : "bg-slate-900 hover:bg-slate-700"
            }`}
          >
            {loading ? "loading..." : "Create Wallet"}
          </button>
        )}
        {connected && (
          <button
            onClick={disconnect}
            disabled={loading}
            className={`px-4 py-2 rounded-md mt-4 font-semibold text-white transition duration-500 ease-in-out transform bg-slate-800 hover:bg-slate-700`}
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
};

export default EtherApiContractWallet;
