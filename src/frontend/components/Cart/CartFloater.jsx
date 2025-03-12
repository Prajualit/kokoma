import React from 'react'
import Image from 'next/image'
import CartIcon from '@/frontend/assets/Cart/CartIcon.png'
import Link from 'next/link'

const CartFloater = () => {
    return (
        <Link href="/Cart">
            <button className='fixed hover:scale-110 transition-transform duration-300 shadow-2xl shadow-black z-50 bottom-5 right-5 bg-[#112D4E] p-3 rounded-full'>
                <Image src={CartIcon} width={25} height={25} alt="" />
            </button>
        </Link>
    )
}

export default CartFloater
