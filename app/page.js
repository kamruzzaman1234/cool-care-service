import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/HomePage/Banner/Banner";
import About from "@/components/HomePage/About/About";
import Service from "@/components/HomePage/Service/Service";
import ContactA from "@/components/HomePage/ContactA/ContactA";
import PopularProduct from "@/components/HomePage/PopularProduct/PopularProduct";
import OurTeam from "@/components/HomePage/OurTeam/OurTeam";

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <About></About>
        <Service></Service>
        <ContactA></ContactA>
        <PopularProduct></PopularProduct>
        <OurTeam></OurTeam>
      </main>
      
    </div>
  );
}
