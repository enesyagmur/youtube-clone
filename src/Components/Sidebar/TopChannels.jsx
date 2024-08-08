import React, { useEffect, useState } from "react";
import { getTopChannels } from "../../Api/topChannelsApi";

const TopChannels = ({ theme2 }) => {
  const [channels, setChannels] = useState();
  useEffect(() => {
    const fetchChannels = async () => {
      const result = await getTopChannels();
      setChannels(result);
    };
    fetchChannels();
  }, []);

  return (
    <div className="w-10/12 flex flex-col items-center">
      <div className="w-full h-10 flex items-center justify-center">
        <div className={`w-full h-[2px] ${theme2}`}></div>
      </div>
      {channels
        ? channels.map((item, index) => (
            <div
              className="w-10/12 flex  items-center mt-2 cursor-pointer hover:opacity-80"
              key={index}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt=""
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
              <p className="text-sm ml-4">
                {item.snippet.channelTitle.split(" ")[0]}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default TopChannels;