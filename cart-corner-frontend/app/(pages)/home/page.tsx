"use client";
import ProductCard from "@/src/components/ProductCard";
import Slider from "@/src/components/Slider";
// import TopHeader from "@/src/components/TopHeader";
// import Footer from "@/src/components/Footer";
// import NavBar from "@/src/components/Navbar";
import Card from "@/src/components/FeaturedCard";
import featured1 from "@/public/assets/images/featured1.jpg";
import featured2 from "@/public/assets/images/featured2.jpg";
import featured3 from "@/public/assets/images/featured3.jpg";
import { useProductListQuery } from "@/src/redux/api/productApi";

const Home = () => {
  const { data: products, refetch } = useProductListQuery([]);

  return (
    <div>
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
            <ProductCard product={item} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
