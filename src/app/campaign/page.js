"use client";
import { useState } from "react";
import { playerArray } from "../data";

const ProfileIcon = ({ player }) => {
  return (
    <div className="border border-gray-200 w-[100px] p-4 rounded flex justify-center items-center flex-col gap-2">
      <div>{player.emoji}</div>
      <div className="text-lg">{player.name}</div>
    </div>
  );
};

const CampaignView = () => {
  const title = "Sunset Serenity";
  const story =
    "In the mystical realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining...realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining... realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining... realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining...realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining... realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining... realm of Eldoria, the sun is setting..., and the moon is rising..., and the stars are shining...";
  const url =
    "https://cdn.midjourney.com/ada11329-4956-466a-96db-4c428073ecfa/0_3.png";

  const [isShowMore, setIsShowMore] = useState(story.length < 100);

  return (
    <div>
      <div
        className="w-full h-[200px]"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className="p-4">
        <div className="text-4xl mb-4">{title}</div>
        <div className="text-4xl ">Story</div>
        <div>{isShowMore ? story : story.slice(0, 100)}</div>

        {!isShowMore ? (
          <div
            className="hover:bg-blue-200 hover:text-blue-500 hover:cursor-pointer w-fit px-2 text-blue-500"
            onClick={() => setIsShowMore(true)}
          >
            Show more
          </div>
        ) : (
          <div
            className="hover:bg-blue-200 hover:text-blue-500 hover:cursor-pointer w-fit px-2 text-blue-500"
            onClick={() => setIsShowMore(false)}
          >
            Hide
          </div>
        )}

        <div className="text-4xl my-4">Players</div>
        <div className="flex gap-4">
          {playerArray.map((player, i) => {
            return <ProfileIcon player={player} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CampaignView;
