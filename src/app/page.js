"use client";
import Navbar from "@/frontend/components/Navbar.jsx";
import Pagehome from "@/frontend/components/Home/Home.jsx";
import Footer from "@/frontend/components/Footer.jsx";
import Products from "@/frontend/components/OurProducts/Products/Products.jsx";
import { useSelector } from "react-redux";
import CartFloater from "@/frontend/components/Cart/CartFloater";
import AboutUs from "@/frontend/components/AboutUs/AboutUs.jsx";
import ContactUs from "@/frontend/components/ContactUs/ContactUs.jsx";
import Help from "@/frontend/components/Help/Help.jsx";
import ScrollProgressButton from "@/frontend/components/Home/ScrollProgressButton.jsx";

export default function Home() {
  const activeNav = useSelector((state) => state.navbar.activeNav);

  return (
    <>
      <Navbar />
      <CartFloater />
      <ScrollProgressButton />
      {activeNav === "Home" && <Pagehome />}
      {activeNav === "Our Products" && <Products />}
      {activeNav === "About us" && <AboutUs />}
      {activeNav === "Contact us" && <ContactUs />}
      {activeNav === "Help" && <Help />}
      <Footer />
    </>
  );
}
