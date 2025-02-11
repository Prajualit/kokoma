import Image from "next/image";
import Navbar from "@/frontend/components/Navbar";
import Slider from "@/frontend/components/Home/Slider/Slider";
import Products from "@/frontend/components/Home/Products/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Products />
    </>
  );
}
