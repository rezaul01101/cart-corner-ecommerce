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
        <div className="relative">
          <Image
            className=" w-full h-[450px] object-cover -z-50"
            src={slider1}
            alt="slider1"
          />
          <div className=" absolute top-[25%] left-20">
            <h1 className=" text-5xl font-semibold">New Range Of <br /> Samsung Camera</h1>
            <p className=" text-2xl text-gray-300 mt-5">Samsung EOS600D/Kiss X5</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" w-full h-[450px] object-cover -z-50"
          src={slider3}
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
          <Image
            className=" w-full h-[450px] object-cover -z-50"
            src={slider2}
            alt="slider1"
          />
          <div className=" absolute top-[25%] left-20">
            <h1 className=" text-5xl font-semibold">New Range Of <br /> Samsung Camera</h1>
            <p className=" text-2xl text-gray-300 mt-5">Samsung EOS600D/Kiss X5</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
