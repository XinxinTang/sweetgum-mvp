import React from "react";

const bicycleImg =
  "https://evchargeplus.com/wp-content/uploads/2019/05/maxresdefault.jpg";

const pictures = {
  bike: "https://evchargeplus.com/wp-content/uploads/2019/05/maxresdefault.jpg",
  drive:
    "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Electric_Car_Concept_XL_721_420_80_s_c1.jpg",
  save: "https://blog.mbeforyou.com/wp-content/uploads/2019/05/save-on-electricity.jpg",
};

const Games = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-2/4 flex  flex-wrap">
        <div className="flex flex-col mb-8 items-center hover:scale-105 shadow-md cursor-pointer hover:transition justify-center w-1/3  px-3 ">
          <img
            className="w-48 h-40 mb-2 rounded  object-cover"
            src={pictures.bike}
          />

          <label className="font-semibold text-base">Bike to earn</label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
        <div className="flex flex-col mb-8 items-center hover:scale-105 shadow-md cursor-pointer hover:transition justify-center w-1/3  px-3 ">
          <img className="w-48 h-40 mb-2 object-cover" src={pictures.drive} />

          <label className="font-semibold text-base">Drive to earn</label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
        <div className="flex flex-col mb-8 items-center justify-center w-1/3 hover:scale-105 shadow-md cursor-pointer hover:transition px-3 ">
          <img className="w-48 h-40 mb-2 object-cover" src={pictures.save} />

          <label className="font-semibold text-base">Save to earn</label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
        <div className="flex flex-col mb-5 items-center justify-center hover:scale-105 shadow-md cursor-pointer hover:transition w-1/3  px-3 ">
          <img className="w-48 h-40 mb-2" src={bicycleImg} />

          <label className="font-semibold text-base">
            Gamified Carbon Projects
          </label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
        <div className="flex flex-col mb-5 items-center justify-center hover:scale-105 shadow-md cursor-pointer hover:transition w-1/3  px-3 ">
          <img className="w-48 h-40 mb-2" src={bicycleImg} />

          <label className="font-semibold text-base">
            Gamified Carbon Projects
          </label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
        <div className="flex flex-col mb-5 items-center justify-center hover:scale-105 shadow-md cursor-pointer hover:transition w-1/3  px-3 ">
          <img className="w-48 h-40 mb-2" src={bicycleImg} />

          <label className="font-semibold text-base">
            Gamified Carbon Projects
          </label>
          <label className="font-light text-base">Earn tokens</label>
        </div>
      </div>
    </div>
  );
};

export default Games;
