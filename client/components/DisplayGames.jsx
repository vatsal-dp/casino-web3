import React from "react";
import { useRouter } from "next/router";
import { PoolCard } from ".";
import { loader } from "../assets";

import Image from "next/image";

const DisplayGames = ({ title, isLoading, games }) => {
  
  const router = useRouter();

  const handleNavigate = (campaign) => {
    console.log(campaign.title);
    router.push(
      {
        pathname: `/CampaignDetails/${campaign.title}`,
        query: { ...campaign },
      },
      `/CampaignDetails/${campaign.title}`
    );
  };

  return (
    <>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title}
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <div className="flex justify-center items-center min-h-[75vh] w-full">
            <Image
              src={loader}
              alt="loader"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
        )}

        {!isLoading && games.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading &&
          games.length > 0 &&
          games.map((campaign) => (
            <PoolCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </>
  );
};

export default DisplayGames;