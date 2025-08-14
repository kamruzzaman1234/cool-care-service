"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const ContactA = ()=>{
    return(
        <div className="pt-20 pb-20">
            <div className="max-w-6xl w-full mx-auto">
                <div className="bg-black flex justify-between px-14 py-20 rounded-2xl">
                    <div className="flex gap-4 items-center">
                        <div className="w-full h-full lg:w-[39px] lg:h-[25px] ">
                            <img src="https://i.ibb.co.com/twRn1zNf/i1.png"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                            <h4 className={`${inter.className} text-lg text-white font-normal`}>We are open monday-friday</h4>
                            <h3 className={`${inter.className} text-2xl text-white font-bold`}>7:00 am - 9:00 pm</h3>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-full h-full lg:w-[39px] lg:h-[25px] ">
                            <img src="https://i.ibb.co.com/twRn1zNf/i1.png"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                            <h4 className={`${inter.className} text-lg text-white font-normal`}>We are open monday-friday</h4>
                            <h3 className={`${inter.className} text-2xl text-white font-bold`}>7:00 am - 9:00 pm</h3>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-full h-full lg:w-[39px] lg:h-[25px] ">
                            <img src="https://i.ibb.co.com/twRn1zNf/i1.png"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                            <h4 className={`${inter.className} text-lg text-white font-normal`}>We are open monday-friday</h4>
                            <h3 className={`${inter.className} text-2xl text-white font-bold`}>7:00 am - 9:00 pm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactA;