import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full absolute top-5 px-4 flex lg:justify-between justify-start items-center bg-transparent z-[100] h-[10%] ">
      <MobileNav />
      <Link href="/" className="ml-4 normal-case text-xl">
        <Image
          src="/logo_7.png"
          alt="logo"
          width={200}
          height={200}
          // style={{ scale: "150%" }}
          className="  cursor-pointer"
        />
      </Link>
      <div className="hidden lg:flex items-center">
        <div>
          <ul className="menu menu-horizontal px-1 font-semibold text-base text-white">
            <li className="">
              <Link href="/about">About Us</Link>
              {/* <a>About Us</a> */}
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/vendor-submission">Vendor Submission</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/make-an-inquiry" className="btn btn-primary">
            Make an Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
