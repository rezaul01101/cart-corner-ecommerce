import slider1 from "@/public/assets/images/slider1.jpg";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";
const Slider = () => {
  return (
    <div>
      <SwiperSlider />
      {/* <Image className=' w-full h-[450px] object-cover' src={slider1} alt="slider1"/> */}
    </div>
  );
};

export default Slider;
