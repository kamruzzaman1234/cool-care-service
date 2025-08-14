"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const OurTeam = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-6xl w-full mx-auto">
                <div className="max-w-full lg:max-w-[600px] w-full mx-auto">
                    <div className="flex flex-col items-center gap-4 text-center">
                    <h4 className={`${inter.className} text-lg font-semibold text-[#FF3811]`}>Team</h4>
                    <h2 className={`${inter.className} bold text-4xl font-bold`}>Meet Our Team</h2>
                    <p className="text-center capitalize">The Majority have suffered alteration in some form, by injected humour,
                     or randomised words which don't look even slightly believable. </p>
                </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         <div className="p-3 flex flex-col gap-2 border-2 rounded-2xl border-gray-300">
                            <div>
                                <img src="https://i.ibb.co.com/WvVP3nPY/1.jpg" className="rounded-3xl" alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <h3 className={`${inter.className} text-lg font-semibold`}>Electrical System</h3>
                                    <h4 className={`${inter.className} text-[#FF3811]`}><span>Price : $</span><span>2000</span> </h4>
                                </div>
                                <div>
                                    <Link href=""><FaArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;