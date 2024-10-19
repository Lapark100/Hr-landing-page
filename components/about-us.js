import { Grid2X2Icon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dashImg from "@/asset/dashboard-1.png";
import hrImg from "@/asset/hr-team-image.jpg";
import hrEmployee from "@/asset/hr-employee.jpg";

export default function AboutUs() {
  return (
    <section className="bg-white space-y-16 pt-20 pb-20 ">
      <div className="container mx-auto max-w-sm md:max-w-6xl flex flex-col items-center space-y-2">
        <div className="inline-flex items-center py-3 px-7 space-x-2 border border-gray-200 rounded-full text-sm text-[#004474] uppercase">
          <Grid2X2Icon className="w-4 h-4" />
          <p className="text-center font-medium">About Us</p>
        </div>
        <h2 className="text-3xl md:text-5xl text-[#004474] text-center max-w-3xl font-medium leading-normal md:leading-relaxed">
          Empowering teams through innovative HR solutions and support.
        </h2>
        <p className="text-center text-md md:text-lg max-w-2xl">
          Delivering tailored HR solutions that enhance productivity, engagement, and growth for your organization.
        </p>
      </div>
      <div className="flex rounded-lg bg-[#F0F4F8] container mx-auto max-w-sm md:max-w-6xl">
        <div className=" text-center md:text-left flex flex-col justify-center w-full md:w-1/2 h-[300px] md:h-[400px] space-y-8 md:space-y-16">
          <div className="pl-6 pr-6  md:pl-16 md:pr-16 md:pt-9 md:pb-16 space-y-1 md:space-y-3">
            <h3 className="text-3xl md:text-4xl font-semibold">Innovative Solutions</h3>
            <p>We leverage cutting-edge technology to provide comprehensive HR solutions tailored to your needs.</p>
          </div>
          <div className=" md:pl-16">
            <Link href="/" className="px-6 py-4 bg-[#004474] text-[#E0F2FF] rounded-md font-medium ">
              Explore All
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src={dashImg} width={500} height={400} className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 container mx-auto max-w-sm md:max-w-6xl">
        <div className="flex flex-col rounded-lg bg-[#F0F4F8] max-w-sm md:max-w-xl">
          <div className="p-16 space-y-3 text-center">
            <h3 className="text-4xl font-semibold">Mission</h3>
            <p>Empowering teams with innovative HR solutions to enhance productivity and organizational growth.</p>
          </div>
          <div className="flex-grow">
            <Image src={hrImg} width={500} height={400} className="object-cover w-full h-full rounded-bl-lg rounded-br-lg" />
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-[#F0F4F8] max-w-sm md:max-w-xl">
          <div className="p-16 space-y-3 text-center">
            <h3 className="text-4xl font-semibold">Vision</h3>
            <p>Delivering tailored HR solutions that drive engagement, productivity, and sustainable growth.</p>
          </div>
          <div className="flex-grow">
            <Image src={hrEmployee} width={500} height={400} className="object-cover w-full h-full rounded-bl-lg rounded-br-lg" />
          </div>
        </div>
      </div>
     
     
    </section>
  );
}
