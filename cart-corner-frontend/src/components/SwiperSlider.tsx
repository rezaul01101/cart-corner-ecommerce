import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import slider1 from "@/public/assets/images/slider1.jpg";
import slider3 from "@/public/assets/images/slider3.jpg";
import slider2 from "@/public/assets/images/slide2.jpg";

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover"
          src={slider1}
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover"
          src={slider3}
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover"
          src={slider2}
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover"
          src={slider2}
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover"
          src={slider2}
          alt="slider1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
