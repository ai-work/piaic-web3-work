import Link from "next/link";

const Step1 = () => {
  return (
    <>
      <div className="mb-5">
        <h3>Step 1a: Contract Account Creation via StackUp</h3>
        <p>
          <strong>yarn run simpleAccount address:</strong><br/>
          <Link
            className="text-gray-600 hover:text-gray-700 break-all"
            href={
              "https://goerli.etherscan.io/address/0x9bc51dbd466c28ee5e7f52f4d1df859af7fc697b"
            }
          >
            Address: 0x9BC51DBD466c28EE5e7f52F4d1dF859Af7fC697b
          </Link>
        </p>
      </div>
      <div className="mb-5">
        <h3>Step 1b: Deposit 0.2 Goerli Eth from my old EOA to newly created Contract Account</h3>
        <p>
          <strong>Manually via Metamask:</strong><br/>
          <Link
            className="text-gray-600 hover:text-gray-700 break-all"
            href={
              "https://goerli.etherscan.io/tx/0x3443675e742b1b20f2ed540687c78886aedba6984bb7ed84bfe01c3ec3cee666"
            }
          >
            Transaction: 0x3443675e742b1b20f2ed540687c78886aedba6984bb7ed84bfe01c3ec3cee666
          </Link>
        </p>
      </div>
      <div className="mb-5">
        <h3>Step 1c: Send back 0.1 Goerli Eth from new Contract Account to my old EOA via Stackup</h3>
        <p>
          <strong>yarn run simpleAccount transfer --to 0x1C5AE5EBF30bd82e44DCa8e7cdC12100E733CB75 --amount 0.1</strong>
          <br/>
          <Link
            className="text-gray-600 hover:text-gray-700 break-all"
            href={
              "https://goerli.etherscan.io/tx/0xaa36f5c0dd0a6ecc3edceb1c4cfc3d9574b7a240a1bc938c37d2f3d063d0249e"
            }
          >
            Transaction: 0xaa36f5c0dd0a6ecc3edceb1c4cfc3d9574b7a240a1bc938c37d2f3d063d0249e
          </Link>
        </p>
      </div>
    </>
  );
};

export default Step1;

interface LinknLabelProps {
  desc?: string;
  label: string;
  href: string;
}