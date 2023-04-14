"use client";
import React, { useState } from "react";
import Step1 from "@/components/(steps)/Step1";
import Step2 from "@/components/(steps)/Step2";
import Step3 from "@/components/(steps)/Step3";
import ButtonStyle from "@/components/ButtonStyle";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from "react-icons/tb";

const steps = [
  {
    number: 1,
    label: "4337 Abstract Account",
    description: "Basic implementation of AA using ERC-4337 via Stackup.",
    component: <Step1 />,
    icon: <TbSquareRoundedNumber1Filled size={56} />,
  },
  {
    number: 2,
    label: "Mint NFT on Polygon ",
    description:
      "Zerodev Gasless Transaction - Creating a 4337 account and mint NFT 1 by 1 and in batch.",
    component: <Step2 />,
    icon: <TbSquareRoundedNumber2Filled size={56} />,
  },
  {
    number: 3,
    label: "Wallets via Social",
    description: "Social Media backed Wallet Accounts",
    component: <Step3 />,
    icon: <TbSquareRoundedNumber3Filled size={56} />,
  },
];

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    // <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    //   <div className="relative p-6 md:p-16">
    //     <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-center lg:gap-16">
    //       <div className="lg:w-1/3 mb-10 mt-8 md:mt-0  ">
    //         <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-800">
    //           Steps for Assignments
    //         </h2>
    //         <nav
    //           className="grid gap-4 mt-5 md:mt-10"
    //           aria-label="Tabs"
    //           role="tablist"
    //         >
    //           {steps.map((step) => (
    //             <ButtonStyle
    //               key={step.number}
    //               active={step.number === activeStep}
    //               label={step.label}
    //               description={step.description}
    //               onClick={() => handleStepClick(step.number)}
    //               icon={step.icon}
    //             />
    //           ))}
    //         </nav>
    //       </div>
    //       <div className="mb-10 mt-8 md:mt-0 lg:mb-0 bg-gray-100 p-4 md:p-8 rounded-md w-full lg:w-2/3 ">
    //         {steps.map((step, index) =>
    //           index === activeStep - 1 ? step.component : null
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-1/3 mb-10 mt-8 md:mt-0">
            {/* <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-800">
              Steps for Assignments
            </h2> */}
            <nav
              className="flex flex-col gap-4 md:gap-6 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              {steps.map((step) => (
                <ButtonStyle
                  key={step.number}
                  active={step.number === activeStep}
                  label={step.label}
                  description={step.description}
                  onClick={() => handleStepClick(step.number)}
                  icon={step.icon}
                />
              ))}
            </nav>
          </div>

          <div className="mb-10 mt-8 md:mt-0 lg:mb-0 bg-gray-100 p-4 md:p-8 rounded-md w-full lg:w-2/3">
            {steps.map((step, index) =>
              index === activeStep - 1 ? step.component : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
