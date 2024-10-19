import Link from "next/link"
export default function CallToAction () {
return (<section className=" h-[250px] bg-[#004474] space-y-16 flex justify-center ">
    <div className="  container mx-auto max-w-sm md:max-w-6xl flex flex-col md:flex-row justify-center md:justify-between items-center space-y-5 md:space-y-2">
      <div className="w-full md:w-[320px]">
        <h3 className="text-white text-center md:text-left text-3xl leading-relaxed">Discover the full scale of <span className="underline decoration-[#e0F2FF]">HR</span> capabilities</h3>
      </div>
      <div className="space-x-4">
      <Link href="/" className="px-3 py-2 md:px-6 md:py-4 bg-white rounded-md font-medium ">Start for Free</Link>
      <Link href="/" className="px-3 py-2 md:px-6 md:py-4 bg-[#E0F2FF] rounded-md font-medium ">Get Demo</Link>
      </div>
    </div>
   
  </section>)
}


