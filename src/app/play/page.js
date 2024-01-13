const url =
  "https://cdn.midjourney.com/ada11329-4956-466a-96db-4c428073ecfa/0_2.png";

const PlayCampaign = () => {
  return (
    <div>
      <div
        className="w-full h-[200px]"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    </div>
  );
};

export default PlayCampaign;
