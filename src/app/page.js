"use client";
import { Button } from "@/components/ui/button";
import { dndCampaigns, dndCampaigns2, dndCampaigns3 } from "./data";
import { useState } from "react";
import Link from "next/link";

const CampaignsMapper = ({ campaigns, title }) => {
  return (
    <>
      <div className="text-2xl mb-4">{title}</div>

      {campaigns.map((campaign, i) => {
        return (
          <div
            key={i}
            className="flex justify-between items-center p-2 w-[400px] border border-slate-200 mb-4"
          >
            <div>{campaign.emoji}</div>
            <div>{campaign.name}</div>
            <div>{campaign.number}</div>
            <Link href={"/campaign"}>
              <Button variant="outline">View</Button>
            </Link>
            <Link href={"/play"}>
              <Button>Play</Button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const Home = () => {
  return (
    <div className="w-full p-8">
      <CampaignsMapper campaigns={dndCampaigns} title="Active Campaigns (DM)" />
      <CampaignsMapper
        campaigns={dndCampaigns2}
        title="Active Campaigns (Player)"
      />
      <CampaignsMapper
        campaigns={dndCampaigns3}
        title="Finished Campaigns (DM)"
      />

      <div className="text-2xl mb-4"></div>
    </div>
  );
};

export default Home;
