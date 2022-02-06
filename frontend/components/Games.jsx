import React, { useState } from "react";
import Image from "next/image";

import screen from "../assets/imgs/screen01.png";
import screen2 from "../assets/imgs/screen02.png";
import btnBg from "../assets/imgs/btn-bg.png";

import { useMoralis } from "react-moralis";

const bicycleImg =
  "https://evchargeplus.com/wp-content/uploads/2019/05/maxresdefault.jpg";

const pictures = {
  bike: "https://evchargeplus.com/wp-content/uploads/2019/05/maxresdefault.jpg",
  drive:
    "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Electric_Car_Concept_XL_721_420_80_s_c1.jpg",
  save: "https://blog.mbeforyou.com/wp-content/uploads/2019/05/save-on-electricity.jpg",
  game: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85NGFhNTlhNTRjYWM2ODI5MmYxZWMzNjdkYmY2NGU4Ny5qcGc=.jpg",
};

const Games = () => {
  const { Moralis, logout } = useMoralis();

  const [showGame, setShowGames] = useState(true);

  const [showImg, setShowImg] = useState(true);

  const currentuser = Moralis.User.current();
  console.log("user", currentuser.id);

  const stateCheck = () => {
    if (showImg === true) {
      setShowImg(false);
    } else {
      setShowImg(true);
    }
  };

  return (
    <div className="w-full flex-col flex justify-center items-center">
      <h2>User Address: {currentuser.id}</h2>
      <button
        onClick={logout}
        type="button"
        class="text-green-700 mt-5 transition hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        Disconnect
      </button>

      {showGame ? (
        <div
          className=" w-2/4 flex mt-10 flex-wrap"
          onClick={() => {
            setShowGames(false);
          }}
        >
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
            <img className="w-48 h-40 mb-2" src={pictures.game} />

            <label className="font-semibold text-base">
              Gamified Carbon Projects
            </label>
            <label className="font-light text-base">Earn tokens</label>
          </div>
          <div className="flex flex-col mb-5 items-center justify-center hover:scale-105 shadow-md cursor-pointer hover:transition w-1/3  px-3 ">
            <img className="w-48 h-40 mb-2" src={pictures.game} />

            <label className="font-semibold text-base">
              Gamified Carbon Projects
            </label>
            <label className="font-light text-base">Earn tokens</label>
          </div>
          <div className="flex flex-col mb-5 items-center justify-center hover:scale-105 shadow-md cursor-pointer hover:transition w-1/3  px-3 ">
            <img className="w-48 h-40 mb-2" src={pictures.game} />

            <label className="font-semibold text-base">
              Gamified Carbon Projects
            </label>
            <label className="font-light text-base">Earn tokens</label>
          </div>
        </div>
      ) : (
        <div>
          <h2
            className="underline cursor-pointer"
            onClick={() => {
              setShowGames(true);
            }}
          >
            Back to Games
          </h2>

          <div className="mt-5 relative">
            <button
              onClick={stateCheck}
              className="absolute w-10 h-full mt-36 ml-36 z-10"
            ></button>
            {showImg ? (
              <Image src={screen} width={320} height={600} />
            ) : (
              <Image src={screen2} width={320} height={600} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
