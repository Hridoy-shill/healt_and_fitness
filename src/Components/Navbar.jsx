"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="md:py-8 py-6 w-full bg-black text-white flex flex-row items-center px-10">
      <div className="flex justify-between items-center w-full">

        {/* div 1 */}
        <div className="">logo</div>

        {/* div 2 */}
        <div className="order-2 md:order-1">

          {/* mobile menu */}
          <div className="flex md:hidden lg:hidden sm:visible items-center z-50 w-full">
            <div className="">
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=""
              >
                <span>{isMenuOpen === true ? <FaXmark className="text-[22px] text-[#D2000D]"/> : <FaBars className="text-[22px]"/>}</span>
              </div>
            </div>
            <div
              className={`absolute duration-500 ${
                isMenuOpen
                  ? "top-[280px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
                  : "-top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
              }`}
            >
              <div className="bg-[rgb(8,4,4)]">
                <ul className="flex flex-col text-center text-[18px] justify-evenly items-center space-y-6 py-[40px]">
                  <li>
                    <Link
                      href={"/"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold  duration-300 font-medium"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/classes"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/team"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold  duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/price"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Price
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/testimonial"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/blog"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* big screen navigation bar */}
          <div className="md:block lg:block hidden ">
            <ul className="flex gap-4">
              <li>
                <Link
                  href={"/"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold  duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/classes"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href={"/team"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold  duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href={"/price"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  Price
                </Link>
              </li>
              <li>
                <Link
                  href={"/testimonial"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  Review
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className=" hover:text-[#D2000D] text-[16px] hover:font-semibold font-medium duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* div 3 */}
        <div className="order-1 md:order-2 sm:flex sm:justify-end">user login</div>
      </div>
    </nav>
  );
};

export default Navbar;
