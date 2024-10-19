import { ArrowRight, Grid2X2Icon, HandPlatter } from "lucide-react";
import Image from "next/image";
import testImag from "@/asset/hr-testimonial-image.webp";

export default function Services() {
  return (
    <section className="bg-white space-y-16 pb-16">
      <div className="bg-[#004474] h-[400px] md:h-[500px] rounded-lg container mx-auto max-w-sm md:max-w-7xl flex flex-col justify-center items-center space-y-4 md:space-y-2">
        <div className="inline-flex items-center py-3 px-7 space-x-2 border bg-white/20 shadow-md backdrop-blur-sm border-white/30 rounded-full text-sm text-white uppercase">
          <HandPlatter className="w-4 h-4" />
          <p className="text-center font-medium">Services</p>
        </div>
        <h2 className="text-2xl md:text-5xl text-white text-center max-w-sm md:max-w-3xl font-medium leading-normal md:leading-relaxed">
          Empowering teams through innovative HR solutions and support.
        </h2>
        <p className="text-center text-white text-base md:text-lg max-w-sm md:max-w-2xl">
          Delivering tailored HR solutions that enhance productivity, engagement, and growth for your organization.
        </p>
        <div className="flex items-center space-x-1 underline text-white">
          <span>All Services</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <div>
          <span className="text-3xl md:text-6xl font-bold">&quot;</span>
        </div>
        <div className="">
          <h2 className="text-2xl md:text-4xl text-[#004474] text-center max-w-sm md:max-w-4xl font-medium leading-normal md:leading-relaxed">
            &quot;This HR solution has transformed our workforce management. The intuitive features, real-time analytics, and seamless integration have greatly improved productivity and employee satisfaction.&quot;
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="w-12 h-12 rounded-full">
            <Image
              src={testImag}
              width={20}
              height={20}
              className="object-cover w-full h-full rounded-full"
              alt="hr image"
            />
          </div>
          <p className="font-semibold">Mark Thompson</p>
          <p>Chief Human Resources Officer at Apex Industries</p>
        </div>
      </div>
      <div className="bg-[#F0F4F8] h-[150px] md:h-[250px] rounded-lg container mx-auto max-w-sm md:max-w-7xl flex justify-center items-center">
        <div className="flex justify-center items-center container mx-auto max-w-sm md:max-w-5xl space-x-16 md:space-x-36">
          <div className="text-center space-y-1">
            <h3 className="text-2xl md:text-6xl font-semibold md:font-medium">2021</h3>
            <p>Founded</p>
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-2xl md:text-6xl font-semibold md:font-medium">50K</h3>
            <p>Users</p>
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-2xl md:text-6xl font-semibold md:font-medium">1K</h3>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
