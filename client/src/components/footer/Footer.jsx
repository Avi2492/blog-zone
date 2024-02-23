import {
  RiFacebookLine,
  RiLinkedinLine,
  RiYoutubeLine,
} from "@remixicon/react";
import React from "react";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-300 py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <Logo />
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <a
                    className="font-medium text-gray-400 hover:text-gray-700"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-400 hover:text-gray-700"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-400 hover:text-gray-700"
                    href="#"
                  >
                    Return Policy
                  </a>
                </li>
                <li className="p-5">
                  <a
                    className="font-medium text-gray-400 hover:text-gray-700"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center text-gray-400 rounded-full border border-gray-500 hover:border-gray-800">
                      <RiLinkedinLine />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center text-gray-400 rounded-full border border-gray-500 hover:border-gray-800">
                      <RiFacebookLine />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center text-gray-400 rounded-full border border-gray-500 hover:border-gray-800">
                      <RiYoutubeLine />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
