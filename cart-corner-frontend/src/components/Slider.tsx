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
import { useSliderListQuery } from "../redux/api/sliderApi";
import { baseUrl } from "../helpers/config/envConfig";

const Slider = () => {
  const { data: sliderList, refetch } = useSliderListQuery({});
  console.log("sliderList", sliderList);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      rewind={true}
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
      {sliderList?.map((item: any) => (
        <SwiperSlide key={item?.id}>
          <div className="relative w-full h-[450px]">
            <Image
              className=" w-full h-[450px] object-cover -z-50"
              sizes="100vw"
              layout="fill"
              objectFit="cover"
              src={`${baseUrl()}${item?.image}`}
              alt="slider1"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
