import VerticalCard from "../VerticalCard";
import { cardData } from "../../constants/meal_constants";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';

const ScrollContainer = () => {



  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 16,
            slidesPerGroup: 6,
            speed: 1000,
          },

          1600: {
            slidesPerView: 8.5,
            spaceBetween: 16,
            slidesPerGroup: 6,
            speed: 1000,
          },
        }}
        className="mySwiper !p-5"
      >
        {cardData.map((card) => (<SwiperSlide
          key={card.id}>
          <VerticalCard
            name={card.name}
            calories={card.calories}
            price={card.price}
          />

        </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-1/2 left-0 -translate-x-1/2  bg-white z-10 w-[40px] h-[40px] inline-flex items-center justify-center rounded-full text-[#00ccbc] shadow-[0_1px_4px_#00000014] cursor-pointer swiper-button-prev"

      >
        <KeyboardBackspaceIcon />
      </div>
      <div
        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white z-10 w-[40px] h-[40px] inline-flex items-center justify-center rounded-full text-[#00ccbc] shadow-[0_1px_4px_#00000014] cursor-pointer swiper-button-next"
      >
        <EastIcon />
      </div>
    </div>
  );
};

export default ScrollContainer;
