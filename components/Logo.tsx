import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      title=""
      className="flex items-center space-x-1 hover:opacity-75"
    >
      <img className=" w-12 h-12" src="/images/blogo.jpg" alt="" />
      <h1 className=" font-inter text-green-rich font-semibold tracking-wider">
       
      </h1>
    </Link>
  );
}

export default Logo;
