import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { historicalMonuments } from "../../Data";
import "swiper/css/navigation";
import MonumentsMap from "../MonumentsMap";

const HistoricalData = () => {
  const [monumentData, setMonumentData] = useState([]);
  const [slideId, setSlideId] = useState(0);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const getNextData = (id) => {
    console.log(id);
    if (slideId < historicalMonuments.length - 1) {
      navigationNextRef.current.onclick = setSlideId(slideId + 1);
    } else {
      setSlideId(0);
    }
  };
  const getPrevData = () => {
    if (slideId > 0) {
      navigationPrevRef.current.onclick = setSlideId(slideId - 1);
    } else {
      setSlideId(historicalMonuments.length - 1);
    }
  };

  useEffect(() => {
    setMonumentData(historicalMonuments);
  }, [slideId]);

  return (
    <div className="flex w-11/12 mx-auto my-4 bg-cyan-50">
      <MonumentsMap
        monumentLong={historicalMonuments[slideId].long_lat}
        monumentName={historicalMonuments[slideId].title}
      />
      <div className="w-[60%] pr-5 py-4 rounded-lg">
        <Swiper
          initialSlide={slideId}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop={true}
          slidesPerView={1}
          slidesPerGroup={1}
        >
          {monumentData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <a href={data.url} target="_blank">
                  <div className="bg-cyan-50 px-10 cursor-pointer active:scale-95 card">
                    <h1 className="text-emerald-900 text-3xl my-2 font-[karla]">
                      {data.title}
                    </h1>
                    <img
                      src={data.image}
                      alt="Monument Image"
                      className="w-[40%]"
                    />
                    <p className="py-2">{data.description}</p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
          <div className="flex justify-center gap-4">
            <div
              ref={navigationPrevRef}
              onClick={getPrevData}
              className="rounded-md border-2 border-cyan-900 px-4 py-1 hover:bg-cyan-900 hover:text-white active:scale-95 cursor-pointer"
            >
              Prev
            </div>
            <div
              ref={navigationNextRef}
              onClick={getNextData}
              className="rounded-md border-2 border-cyan-900 px-4 py-1 hover:bg-cyan-900 hover:text-white active:scale-95 cursor-pointer"
            >
              Next
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HistoricalData;
