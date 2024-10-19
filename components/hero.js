"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { partnerLogos } from "@/lib/const";
import Image from "next/image";

export default function Hero(){
  return (
    <>
      <section className="space-y-8 flex flex-col justify-center items-center mt-2 md:mt-16 container mx-auto max-w-sm md:max-w-6xl mb-10 md:mb-0">
        <div className="inline-flex items-center px-6 text-sm font-medium bg-white rounded-full py-3 uppercase space-x-2">
          <Zap className="w-4 h-4" />
          <span>Create for fast</span>
        </div>
        <div>
          <h1 className="text-center font-medium text-4xl md:text-6xl text-[#00447A] max-w-2xl leading-normal md:leading-relaxed">
            One tool to{" "}
            <span className="underline decoration-[#E0F2FF]">manage</span>{" "}
            contracts and your team.
          </h1>
        </div>
        <div>
          <p className="text-lg md:text-xl text-center max-w-4xl">
            Streamline your HR processes with our all-in-one platform, designed
            to manage teams, track performance, and simplify payroll
            efficiently.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="flex items-center px-3 py-2 md:px-6 md:py-4 bg-[#00447A] text-[#E0F2FF] rounded-md font-medium"
          >
            Start for Free
          </Link>
          <Link
            href="/"
            className="flex items-center px-3 py-2 md:px-6 md:py-4 bg-white rounded-md font-medium"
          >
            Get Demo
          </Link>
        </div>
      </section>

      <section className="hidden md:flex flex-col md:flex-row space-x-16 items-center mt-10 container mx-auto max-w-sm md:max-w-6xl">
        <div className="w-full md:w-[260px]">
          <p className="text-center md:text-left font-semibold">
            More than 100+ companies partner
          </p>
        </div>

        <div className="flex md:space-x-5 filter grayscale(100%) invert(25%) sepia(100%) saturate(100%) hue-rotate(60deg) contrast(1.5) drop-shadow(0 0 10px #e0f2ff)">
          {partnerLogos.map((logo, index) => {
            return (
              <Image
                src={logo}
                width={logo.width || 75} // Adjust to your desired width
                height={logo.height || 40} // Adjust to your desired height
                alt='hr partners logo'
                className="object-contain"
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
