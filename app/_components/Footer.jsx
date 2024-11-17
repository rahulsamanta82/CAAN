import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-screen text-white flex items-center justify-center p-2 bg-[#171717] border-t border-[#2e2e2e]">
      <div className="flex items-center justify-between gap-2 text-white p-4 w-full">
        <Link href="https://www.linkedin.com/in/rahul-samanta-116572275/" className="text-sm">
          <FaLinkedinIn className=" w-10 h-10" />
        </Link>
        <p className="text-xs s:text-sm hover:text-red-500 transition ease-in-out duration-500">© 2024-2025 Copyright. All rights reserved by Rahul Samanta</p>
        <Link href="https://www.instagram.com/rahul_error_no_404" className="text-sm">
          <FaInstagram className="w-10 h-10" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
