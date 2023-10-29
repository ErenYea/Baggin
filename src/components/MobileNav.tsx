"use client"
import Link from "next/link";
import { useState,useEffect } from "react";

const MobileNav = () => {
    const [dropdownOpen,setDropdownOpen] = useState(false)

    useEffect(()=>{
        document.body.addEventListener("click",()=>setDropdownOpen(false))

        return ()=>{
        document.body.removeEventListener("click",()=>setDropdownOpen(false))
        }
    },[])
    return ( 
        <div className="lg:hidden relative">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={()=>setDropdownOpen(prev=>!prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
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
            className="menu menu-sm dropdown-content absolute mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            style={{display:dropdownOpen?'block':'none'}}
            onClick={()=>setDropdownOpen(false)}
          >
            <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
          <Link href="/vendor-submission">Vendor Submission</Link>
          </li>
            <li>
            <Link href="/contact">Contact Us</Link>
          </li>

          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
          <Link href="/make-an-inquiry">Make An Inquiry</Link>
          </li>
          </ul>
        </div>
     );
}
 
export default MobileNav;