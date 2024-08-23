import Link from "next/link";

const TopHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-2 px-4 flex justify-around">
        <p className="text-sm">Email: <span>rezaul@supreemesupports.com.au</span></p>
        <div className="flex gap-6">
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'}>Register</Link>
        </div>
    </header>
  );
};

export default TopHeader;
