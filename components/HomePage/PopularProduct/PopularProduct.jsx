"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const PopularProduct = ()=>{
    return(
        <div className="pt-20 pb-32">
            <div className="max-w-6xl w-full mx-auto">
                <div className="max-w-full lg:max-w-[600px] w-full mx-auto">
                    <div className="flex flex-col items-center gap-4 text-center">
                    <h4 className={`${inter.className} text-lg font-semibold text-[#FF3811]`}>Popular Products</h4>
                    <h2 className={`${inter.className} bold text-4xl font-bold`}>Browse Our Products</h2>
                    <p className="text-center capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                </div>
                </div>
                <div className="mt-10"> 
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="p-4 border-2 flex justify-center flex-col
                         items-center border-gray-100 gap-2">
                            <div className="p-2 bg-gray-100 w-full justify-center flex">
                               <div className="w-full h-full lg:w-[156px]
                                lg:h-[153px]">
                                     <img src="https://i.ibb.co.com/S4jMJ0vM/6.png"
                                     className="w-full h-full" alt="" />
                               </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <FaStar className="text-yellow-400 text-lg"/>
                                    <FaStar className="text-yellow-400 text-lg"/>
                                    <FaStar className="text-yellow-400 text-lg"/>
                                    <FaStar className="text-yellow-400 text-lg"/>
                                    <FaStar className="text-yellow-400 text-lg"/>
                                </div>
                                <div className="flex gap-2 flex-col items-center ">
                                    <h3 className={`${inter.className} text-lg font-semibold`}>Car Engine Plus</h3>
                                    <h4 className={`${inter.className} text-sm font-bold text-[#FF3811]`}>Price:$<span>2000</span> </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="mt-10 flex justify-center">
                        <Link href="" className="px-6 py-3 text-lg font-semibold
                        rounded-2xl border-2 border-[#FF3811] text-[#FF3811]">More Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct;