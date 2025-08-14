"use client";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const Service  = ()=>{
    return(
        <div className="py-32 ">
            <div className="max-w-6xl w-full mx-auto">
                <div className="max-w-lg w-full mx-auto">
                    <div className="flex flex-col items-center gap-4 text-center">
                    <h4 className={`${inter.className} text-lg font-semibold text-[#FF3811]`}>Service us</h4>
                    <h2 className={`${inter.className} bold text-4xl font-bold`}>Our Service Area</h2>
                    <p className="text-center">the majority have suffered alteration in some form, by injected humour,
                     or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="">

                </div>
                </div>
            </div>
        </div>
    )
}

export default Service;