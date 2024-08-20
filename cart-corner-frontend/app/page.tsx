import ProductCard from "@/src/components/ProductCard";
import Slider from "@/src/components/Slider";
import TopHeader from "@/src/components/TopHeader";
import Product1 from "@/public/assets/images/product1.jpg";
import Product2 from "@/public/assets/images/product2.jpg";
import Product3 from "@/public/assets/images/product3.jpg";
import Product4 from "@/public/assets/images/product4.jpg";
import Product5 from "@/public/assets/images/product5.jpg";
import Product6 from "@/public/assets/images/product6.jpg";
import Product7 from "@/public/assets/images/product7.jpg";
import Footer from "@/src/components/Footer";
import NavBar from "@/src/components/Navbar";
import Card from "@/src/components/FeaturedCard";
import featured1 from "@/public/assets/images/featured1.jpg"
import featured2 from "@/public/assets/images/featured2.jpg"
import featured3 from "@/public/assets/images/featured3.jpg"

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
      name: "Beats Solo2 Solo 2 Wired On-Ear",
      category: "speaker",
      image: Product7,
      price: 68.17,
    },
    {
      name: "Sony XB10 Portable Wireless Speaker",
      category: "speaker",
      image: Product4,
      price: 68.7,
    },
    {
      name: "KPH7 Portable Headphone1",
      category: "bag",
      image: Product6,
      price: 65.3,
    },
    {
      name: "Apple iPad With Retina Display1",
      category: "headphone",
      image: Product5,
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
      <NavBar />
      <Slider />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            image={featured1}
            title="Bobovr Z4"
            subtitle="Vr-Ready"
            link="/shop/vr-ready"
          />
          <Card
            image={featured2}
            title="F10 Incelemesi"
            subtitle="Kablosuz Gamepad"
            link="/shop/gamepad"
          />
          <Card
            image={featured3}
            title="Headphone Zone"
            subtitle="Best Sound Experience"
            link="/shop/headphones"
          />
        </div>
      </div>
      <div className="container m-auto">
        <div className="flex items-center mt-5">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <div className="flex-grow h-px bg-gray-200 mx-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
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
