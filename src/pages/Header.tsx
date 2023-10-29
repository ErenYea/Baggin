import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full absolute top-5 px-4 flex justify-between items-center bg-transparent z-[100] h-[10%] ">
        <div className="hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Make an Inquiry</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Gallery</a>
              {/* <ul className="p-2 z-50">
                <li>
                  <a>Event Management</a>
                </li>
                <li>
                  <a>Event Production</a>
                </li>
                <li>
                  <a>Event Technology</a>
                </li>
                <li>
                  <a>Event Creative</a>
                </li>
                <li>
                  <a>Coporate</a>
                </li>
                <li>
                  <a>Event Strategy</a>
                </li>
              </ul> */}
            </li>
            {/* <li>
              <a>Hospitality </a>
            </li> */}
            <li>
              <a>Vendor Submission </a>
            </li>
          </ul>
        </div>
        <Link href="/" className="ml-4 normal-case text-xl">
          <Image
            src="/logo_4.png"
            alt="logo"
            width={130}
            height={130}
            // style={{ scale: "150%" }}
            className="  cursor-pointer"
          />
        </Link>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base text-white">
          <li className="">
            <Link href="/about">About Us</Link>
            {/* <a>About Us</a> */}
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          {/* <li tabIndex={0}>
            <details>
              <summary>Weddings & Events</summary>
              <ul className="p-2 z-50">
                <li>
                  <a>How we work</a>
                </li>
                <li>
                  <a>Favorite Destinations</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>Submit An Inquiry</a>
                </li>
              </ul>
            </details>
          </li> */}
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
        <div>
        <Link href="/make-an-inquiry" className="btn btn-primary">Make an Inquiry</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
