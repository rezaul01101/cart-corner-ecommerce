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
import { baseUrl } from "../helpers/config/envConfig";

const ProductDetailsSlider = ({ images,setImage }: any) => {
  
 const slideView = images.length > 3 ? 4 : images.length;
  return (
    <Swiper
      spaceBetween={5}
      rewind={true}
      centeredSlides={true}
      slidesPerView={slideView}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {images?.map((item: string, index: number) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[70px] border-r ">
            <Image
              src={`${baseUrl()}${item}`}
              className="h-[70px] w-full rounded-xl cursor-pointer"
              sizes="100vw"
              layout="fill"
              objectFit="contain"
              alt={"product"}
              onClick={()=>setImage(item)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductDetailsSlider;
