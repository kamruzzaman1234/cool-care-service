"use client";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const About = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex justify-between flex-col lg:flex-row gap-20">
                    <div className="relative w-lg">
                        <div className="w-full lg:w-[460px] h-full lg:h-[460px]">
                            <img src="https://i.ibb.co.com/j9WLnHY5/person.jpg"
                            className="w-full h-full object-fill" alt="" />
                        </div>

                        <div className="w-full  lg:w-[327px] absolute right-[-120px] top-[170px]
                         h-full lg:h-[332px]">
                            <img src="https://i.ibb.co.com/6Jcw3dXk/parts.jpg"
                             className="w-full h-full border-4 border-white" alt="" />
                        </div>

                    </div>
                    <div className="flex flex-col gap-10 ">
                        <div className="w-sm flex flex-col gap-4">
                            <h4 className={`${inter.className} text-lg font-semibold text-[#FF3811]`}>About us</h4>
                            <h2 className={`${inter.className} font-bold 
                            text-5xl`}>We are qualified & of experience
                             in this field</h2>

                        </div>
                        <div className="flex flex-col gap-4 w-full lg:w-[489px]">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
                            suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable. </p>
                            <p>
                                the majority have suffered alteration in some form, by injected humour,
                                 or randomised words which don't look even slightly believable. 
                            </p>
                        </div>
                        <div>
                         <Link href="" className="px-6 py-3 text-lg font-bold text-white rounded-lg bg-[#FF3811]">Get More Info</Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;