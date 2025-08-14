"use client";

import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight:["400", "600", "700", "800"],
    display:"swap",
})

const Footer = ()=>{
    return(
        <div className="py-24 bg-[#151515]">
            <div className="max-w-6xl w-full mx-auto">
                <footer className="footer sm:footer-horizontal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
  <aside className="flex flex-col gap-8">
     <Link href="/" className="w-[101px] h-[54px]">
        <img src="https://i.ibb.co.com/2HhwB7k/Group-1.png" className="w-full h-full" alt="" />
    </Link>
    <p>
      Edwin Diaz is a software and web technologies engineer, 
      a life coach trainer who is also a serial .
    </p>
    <div className="flex gap-2">
        <Link href="" className="p-2 rounded-full bg-[#444444]">
            <IoLogoGoogle className="text-sm text-white"/>
        </Link>
        <Link href="" className="p-2 rounded-full bg-[#444444]">
            <FaTwitter className="text-sm text-white"/>
        </Link>

        <Link href="" className="p-2 rounded-full bg-[#444444]">
            <CiInstagram className="text-sm text-white"/>
        </Link>
        <Link href="" className="p-2 rounded-full bg-[#444444]">
            <FaLinkedin className="text-sm text-white"/>
        </Link>
    </div>
  </aside>
  <div className="">
    <h6 className={`${inter.className} mb-10 text-lg font-semibold`}>About</h6>
    <a className="link link-hover text-lg font-normal">Home</a>
    <a className="link link-hover text-lg font-normal">Service</a>
    <a className="link link-hover text-lg font-normal">Cotact</a>
  
  </div>

  <div className="">
    <h6 className={`${inter.className} mb-10 text-lg font-semibold`}>Service</h6>
    <a className="link link-hover text-lg font-normal">Why Friz Doctor</a>
    <a className="link link-hover text-lg font-normal">About</a>
   
  </div>

  <div className="">
    <h6 className={`${inter.className} mb-10 text-lg font-semibold`}>Support</h6>
    <a className="link link-hover text-lg font-normal">Support Center</a>
    <a className="link link-hover text-lg font-normal">Feedback</a>
    <a className="link link-hover text-lg font-normal">Accesbility</a>
    
  </div>
  
</footer>
            </div>
        </div>
    )
}

export default Footer;