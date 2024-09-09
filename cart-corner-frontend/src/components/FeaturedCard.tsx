import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, subtitle, link }: any) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Image src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4">
        {/* <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-lg mb-4">{subtitle}</p> */}
        <Link href={link} className="text-white text-sm font-semibold">
          Shop Now &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Card;
