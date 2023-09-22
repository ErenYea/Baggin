import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="navbar bg-base-300 z-40 ">
      <div className="navbar-start">
        <div className="dropdown">
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
              <a>News</a>
            </li>
            <li>
              <a>Weddings & Events</a>
              <ul className="p-2 z-50">
                <li>
                  <a>How we work</a>
                </li>
                <li>
                  <a>Favorite Destinations</a>
                </li>
                <li>
                  <a>Testinomonials</a>
                </li>
                <li>
                  <a>Submit An Inquiry</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Catering </a>
            </li>
            <li>
              <a>Galleries</a>
              <ul className="p-2 z-50">
                <li>
                  <a>All Galleries</a>
                </li>
                <li>
                  <a>Weddings</a>
                </li>
                <li>
                  <a>Destinations</a>
                </li>
                <li>
                  <a>Milestones</a>
                </li>
                <li>
                  <a>Coporate</a>
                </li>
                <li>
                  <a>Non-Profit</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Solutions</a>
              <ul className="p-2 z-50">
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
              </ul>
            </li>
            <li>
              <a>Hospitality </a>
            </li>
            <li>
              <a>Vendor Submission </a>
            </li>
          </ul>
        </div>
        <a className="ml-4 normal-case text-xl">
          <Image
            src="/logo_2.png"
            alt="logo"
            width={100}
            height={100}
            style={{ scale: "150%" }}
            className=" ml-2 cursor-pointer"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>News</a>
          </li>
          <li tabIndex={0}>
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
          </li>
          <li>
            <a>Catering</a>
          </li>
          <li tabIndex={1}>
            <details>
              <summary>Galleries</summary>
              <ul className="p-2 z-50">
                <li>
                  <a>All Galleries</a>
                </li>
                <li>
                  <a>Weddings</a>
                </li>
                <li>
                  <a>Destinations</a>
                </li>
                <li>
                  <a>Milestones</a>
                </li>
                <li>
                  <a>Coporate</a>
                </li>
                <li>
                  <a>Non-Profit</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={2}>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2 z-50">
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
                  <a>Event Strategy</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Hospitality</a>
          </li>
          <li>
            <a>Vendor Submission</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
