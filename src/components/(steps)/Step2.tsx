import Link from "next/link";
const Step2 = () => {
  return (
    <div className="w-fit  ">
      <h3>Step 2: Polygon Mumbai ERC-721 NFT Minting via ZeroDev</h3>
      <div>
        <p>
          <strong>node app.js:</strong><br/>
          <Link
            className="text-slate-500 hover:text-slate-600 break-all  text-sm "
            href="https://mumbai.polygonscan.com/address/0xeFe12f9c2A9D7A4b31630423B7943BcAB5b59d39#tokentxnsErc721"
          >
            0xeFe12f9c2A9D7A4b31630423B7943BcAB5b59d39
          </Link>
        </p>
        <p>
          <strong>NFT balance:</strong> 4
        </p>
      </div>
    </div>
  );
};

export default Step2;
