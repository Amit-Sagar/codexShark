import React, { useEffect, useState } from "react";
import { exerciseData } from "../../utils/Data";
import AliceCarousel from "react-alice-carousel";

const SliderExercise = () => {
  const [sliderExercise, setSliderExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("All");

  useEffect(() => {
    const fetchData = () => {
      setSliderExercise(exerciseData);
    };
    fetchData();
  }, [sliderExercise]);
  console.log(sliderExercise);

  const items = sliderExercise.map((data) => {
    return (
      <div
        className={`flex flex-col items-center cursor-pointer  hover:shadow-lg hover:shadow-slate-400 p-4 ${
          bodyPart === data && "border-t-green-600 border-t-2"
        }`}
        onClick={() => setBodyPart(data)}
      >
        <img
          src={data.image}
          alt="exercise"
          className="w-48 h-32 object-cover"
        />
        <h1 className="md:text-2xl mt-2 font-semibold capitalize">
          {data.name}
        </h1>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  return (
    <div className="flex mt-10">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default SliderExercise;
