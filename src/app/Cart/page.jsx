"use client";
import Navbar from "@/frontend/components/Navbar.jsx";
import Footer from "@/frontend/components/Footer.jsx";
import { useSelector } from "react-redux";
import CartFloater from "@/frontend/components/Cart/CartFloater";
import Cart from "@/frontend/components/Cart/Cart.jsx";


const page = () => {

    const activeNav = useSelector((state) => state.navbar.activeNav);

    return (
        <div>
            <Navbar />
            <CartFloater />
            <Cart />
            <Footer />
        </div>
    )
}

export default page
