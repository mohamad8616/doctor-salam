import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ w = 100, h = 100 }: { w?: number; h?: number }) => {
  return (
    <Link href="/" className="text-xl font-bold ">
      <Image src={logo} width={w} height={h} alt="سیستم نوبت دهی آنلاین" />
    </Link>
  );
};

export default Logo;
