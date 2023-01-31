import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "../Card";
import styles from "../../styles/Slider.module.css";

const Slider = () => {
  const categoriesData = [
    "Mobikwik Recharge",
    "Health & Beauty",
    "Services",
    "Fashion & Apparels",
    "Travel",
    "Flowers & Gifts",
    "Electronics",
    "Food & Grocery",
    "Baby Care and Toys",
    "Domain & Hosting",
    "Laptop and PC Accessories",
    "Home & Kitchen",
    "Entertainment",
    "Gaming",
    "Jewellery",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sliderContainer}>
        <h4>TOP CATEGORIES</h4>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={6}
          slidesPerGroup={6}
          navigation
          loop={true}
          loopFillGroupWithBlank={true}
          // scrollbar={{ draggable: true }}

          className={styles.sliderCard}
        >
          {categoriesData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
