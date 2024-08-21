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
import { baseUrl } from "../helpers/config/envConfig";

const ProductDetailsSlider = ({ images }: any) => {
  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={true}
      slidesPerView={3}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {images?.map((item: string, index: number) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[70px] border-r">
            <Image
              src={`${baseUrl()}${item}`}
              className="h-[70px] w-full rounded-xl"
              sizes="100vw"
              layout="fill"
              objectFit="contain"
              alt={"product"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductDetailsSlider;
