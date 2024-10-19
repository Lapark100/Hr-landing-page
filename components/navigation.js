"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="bg-[#F0F4F8] container mx-auto max-w-sm md:max-w-6xl px-4">
      <header>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 py-4">
          {/* Logo and Menu Icon for Small Screens */}
          <div className="flex justify-between md:justify-between items-center md:flex-row md:items-center md:space-x-16">
            <h1 className="text-2xl font-semibold">HR</h1>
            {isMobile ? (
              <button
                className="md:hidden"
                onClick={() => {
                  setIsMobile(false);
                }}
              >
                <Menu className="w-6 h-6" />
              </button>
            ) : (
              <button
                className="md:hidden"
                onClick={() => {
                  setIsMobile(true);
                }}
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
          <div></div>
          {isMobile ? (
            <div className="hidden md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link className="flex items-center space-x-2" href="/">
                About Us
              </Link>
              <Link className="flex items-center space-x-2" href="/">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              <Link className="flex items-center space-x-2" href="/">
                Pricing
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link className="flex items-center space-x-2" href="/">
                About Us
              </Link>
              <Link className="flex items-center space-x-2" href="/">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              <Link className="flex items-center space-x-2" href="/">
                Pricing
              </Link>
            </div>
          )}

          {isMobile ? (
            <div className="hidden md:flex md:flex-row md:space-x-4">
              <Link
                href="/"
                className="px-6 py-3 bg-white rounded-md text-gray-700 font-medium text-center"
              >
                Log In
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-[#00447A] text-[#E0F2FF] rounded-md font-medium text-center"
              >
                Start Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <Link
                href="/"
                className="px-6 py-3 bg-white rounded-md text-gray-700 font-medium text-center"
              >
                Log In
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-[#00447A] text-[#E0F2FF] rounded-md font-medium text-center"
              >
                Start Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
