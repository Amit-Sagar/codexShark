import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { historicalMonuments } from "../../Data";
import "swiper/css/navigation";
import MonumentsMap from "../MonumentsMap";

const HistoricalData = () => {
  const [monumentData, setMonumentData] = useState([]);
  useEffect(() => {
    setMonumentData(historicalMonuments);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-4 bg-cyan-50">
      {/* <div className="w-[60%] pr-5 py-4 rounded-lg"> */}
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        // onSlideChange={() => setNum(num + 1)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {monumentData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="flex">
                <MonumentsMap
                  monumentLong={data.long_lat}
                  monumentName={data.title}
                />
                <div className="w-[60%]">
                  <a href={data.url} target="_blank">
                    <div className="bg-cyan-50 px-10 cursor-pointer active:scale-95 card">
                      <h1 className="text-emerald-900 text-3xl my-2">
                        {data.title}
                      </h1>
                      <img src={data.image} alt="" />
                      <p className="py-2">{data.description}</p>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default HistoricalData;
