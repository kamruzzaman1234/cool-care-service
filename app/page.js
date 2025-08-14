import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/HomePage/Banner/Banner";
import About from "@/components/HomePage/About/About";
import Service from "@/components/HomePage/Service/Service";

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <About></About>
        <Service></Service>
      </main>
      
    </div>
  );
}
