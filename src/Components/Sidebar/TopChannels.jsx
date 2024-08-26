import React, { useEffect, useState } from "react";
import { getTopChannels } from "../../Api/topChannelsApi";

const TopChannels = ({ theme2 }) => {
  const [data, setData] = useState();

  const fetchChannels = async () => {
    try {
      const result = await getTopChannels();
      setData(result);
    } catch (error) {
      console.error("Topchannels da verileri çekerken hata");
    }
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return (
    <div className="w-full md:w-10/12 flex flex-col items-center">
      <div className="w-full h-10 flex items-center justify-center">
        <div className={`w-full h-[2px] ${theme2}`}></div>
      </div>
      {data
        ? data.map((item, index) => (
            <div
              className="w-full flex  items-center mt-2 cursor-pointer hover:opacity-80"
              key={index}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt=""
                className="w-[30px] h-[30px] object-cover rounded-full ml-2"
              />
              <p className="hidden md:flex text-sm md:ml-4">
                {item.snippet.channelTitle.split(" ")[0]}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default TopChannels;
