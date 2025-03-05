import React from 'react'
import bg from '@/frontend/assets/Home/WhyKokoma/bg.png'

const WhyKokoma = () => {
    return (
        <div
            className='h-[100vh] p-20 bg-cover bg-center'
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className='bg-white bg-opacity-50 p-10 rounded-3xl shadow-lg shadow-black h-full flex flex-col space-y-10'>
                <h1 className='font-[600] text-[#112D4E] text-[77.66px] leading-[100%] text-left'>
                    Why Kokoma
                </h1>
                <p className='font-[300] text-black text-[29.67px] text-left'>
                    <span className="font-bold">✔ 100% Pure & Natural</span> – No additives, preservatives, or artificial processing. <br />
                    <span className="font-bold">✔ Versatile Usage</span> – Ideal for cooking, skincare, haircare, and wellness.<br />
                    <span className="font-bold">✔ Sustainably Sourced</span> – We work directly with local farmers, promoting ethical and sustainable farming practices.<br />
                    <span className="font-bold">✔ Rich in Nutrients</span> – Packed with healthy fats, vitamins, and antioxidants for maximum benefits.<br />
                    At <span className="font-bold">Kokoma</span>, we believe in delivering only the best coconut oil, ensuring purity, quality, and authenticity in every drop. Join us on a journey towards a healthier, more natural lifestyle with Kokoma Coconut Oil!
                </p>
            </div>
        </div>
    )
}

export default WhyKokoma
