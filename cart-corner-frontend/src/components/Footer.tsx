import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-white mt-5">
      <div className="bg-yellow-500 h-1"></div>
      <div className="py-16 grid grid-cols-7 gap-4 container m-auto justify-center items-center">
        <div className=" col-span-3">
          <Image src={logo} alt="logo" />
          <p className="mt-3">
            We are a team of designers and developers that create high quality
            Magento, Prestashop, Opencart.
          </p>
        </div>
        <div className=" col-span-2">
          <h4 className="font-bold">Products</h4>
          <ul>
            <li>Price Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
          </ul>
        </div>
        <div className=" col-span-2">
          <h4 className="font-bold">Contact</h4>
          <p>Address: 4710-4890 Breckinridge St,Fayetteville, NC 28311</p>
          <p>Email: support@posthemes.com</p>
          <p>Call us: 1-1001-234-5678</p>
        </div>
      </div>
      <div className="container mx-auto">
        <hr className="bg-gray-600"/>
        <div className="py-3 text-center">
          Copyright @ 2024 <span className="text-yellow-500">Cart Corner</span>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
