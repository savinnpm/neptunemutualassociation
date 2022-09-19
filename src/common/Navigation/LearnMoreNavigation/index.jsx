import Cross from "@/icons/Cross";
import NMALogo from "@/icons/Logo";
import NMALogoSmall from "@/icons/NMALogoSmall";
import Link from "next/link";
import React from "react";

const LearnMoreNavigation = () => (
  <div className="flex justify-between w-auto ml-learn-more-sm md:ml-learn-more-md lg:ml-learn-more">
    <div className="w-[99px] h-[117px] md:w-[168px] md:h-[198px] bg-303D87 flex flex-col items-center pt-8 md:pt-14">
      <div className="hidden md:block">
        <NMALogo />
      </div>
      <div className="block md:hidden">
        <NMALogoSmall />
      </div>
      <p className="uppercase text-xxs text-white text-center font-bold tracking-wider mt-2">
        Neptune Mutual
        <br /> Association
      </p>
    </div>
    <div className="mr-4 md:mr-12 mt-8 md:mt-12 cursor-pointer">
      <Link href="/">
        <Cross />
      </Link>
    </div>
  </div>
);

export default LearnMoreNavigation;
