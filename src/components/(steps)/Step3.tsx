import React from "react";
import EtherApiContractWallet from "@/components/(social-buttons)/EtherApiContractWallet";
import WagmiContractWallet from "@/components/(social-buttons)/WagmiContractWallet";

const Step3 = () => {
  return (
    <div className="w-fit">
      <h3>Step 3: Wallet via Social providers using ZeroDev</h3>
      <div>
        <div className="mt-5">
          <h3>Wagmi</h3>
          <WagmiContractWallet />
        </div>
        <div className="mt-5">
          <h3>Ether API</h3>
          <EtherApiContractWallet />
        </div>
      </div>
    </div>
  );
};

export default Step3;
