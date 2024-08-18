import ProductCard from "@/src/components/ProductCard";
import Slider from "@/src/components/Slider";
import TopHeader from "@/src/components/TopHeader";
import Product1 from "@/public/assets/images/product1.jpg";
import Product2 from "@/public/assets/images/product2.jpg";
import Product3 from "@/public/assets/images/product3.jpg";
import Product4 from "@/public/assets/images/product4.jpg";
import Footer from "@/src/components/Footer";

const Home = () => {
  const products = [
    {
      name: "Apple iPad With Retina Display1",
      category: "headphone",
      image: Product1,
      price: 225,
    },
    {
      name: "Bose SoundLink Bluetooth Speaker1",
      category: "headphone",
      image: Product2,
      price: 190,
    },
    {
      name: "Marshall Portable Bluetooth Speaker",
      category: "speaker",
      image: Product3,
      price: 68.17,
    },
    {
      name: "Sony XB10 Portable Wireless Speaker",
      category: "speaker",
      image: Product4,
      price: 68.7,
    },
    {
      name: "Apple iPad With Retina Display1",
      category: "headphone",
      image: Product1,
      price: 225,
    },
    {
      name: "Bose SoundLink Bluetooth Speaker1",
      category: "headphone",
      image: Product2,
      price: 190,
    },
    {
      name: "Marshall Portable Bluetooth Speaker",
      category: "speaker",
      image: Product3,
      price: 68.17,
    },
    {
      name: "Apple iPad With Retina Display1",
      category: "headphone",
      image: Product1,
      price: 225,
    },
    {
      name: "Bose SoundLink Bluetooth Speaker1",
      category: "headphone",
      image: Product2,
      price: 190,
    },
  ];
  return (
    <main className="">
      <TopHeader />
      <Slider />
      <div className="container m-auto">
        <div className="flex items-center mt-5">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <div className="flex-grow h-px bg-gray-200 mx-4"></div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-5">
          {products?.map((item: any, index: number) => (
            <ProductCard product={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
