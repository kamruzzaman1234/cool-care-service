"use client";

import Link from "next/link";

 const Banner = ()=>{
    return(
        <div className="py-8">
            <div className="max-w-6xl w-full mx-auto">
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item 
  bg-[url('https://i.ibb.co.com/Y4vgmQXH/pexels-caio-64609.jpg')] bg-center 
  bg-no-repeat bg-cover rounded-lg
  relative py-32 w-full">
        <div className=" flex flex-col gap-6 w-full px-14
         lg:w-[663px]"> 
        <div className="">
             <h3 className="font-bold text-7xl text-white">Affordable Price For Car Servicing</h3>
        </div>
        <div>
            <p className="text-white">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
        </div>
        <div className="flex gap-2">
            <Link href="" className="px-6 py-3 text-lg font-bold text-white rounded-lg bg-[#FF3811]">Discover More</Link>
            <Link href="" className="px-6 py-3 text-lg font-bold text-white 
            rounded-lg border-2 transition-all delay-150 duration-150 hover:bg-[#FF3811] border-white">Latest Project</Link>
        </div>

    </div>

         
    
    <div className="absolute  right-10 bottom-8 gap-2
    flex -translate-y-1/2 transform">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  
</div>
        </div>
        </div>
    )
 }

 export default Banner;