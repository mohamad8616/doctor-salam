import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-xl font-bold ">
      <Image src={logo} width={100} height={100} alt="سیستم نوبت دهی آنلاین" />
    </Link>
  );
};

export default Logo;
