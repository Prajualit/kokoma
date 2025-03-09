import Image from "next/image";
import Navbar from "@/frontend/components/Navbar.jsx";
import Pagehome from "@/frontend/components//Home/Home.jsx";
import Footer from "@/frontend/components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Pagehome />
      <Footer />
    </>
  );
}
