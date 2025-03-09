"use client"
import React, { useState } from 'react'
import FooterBg from '@/frontend/assets/General/FooterBg.png'
import Image from 'next/image'
import footerlogo from '@/frontend/assets/logos/footerlogo.png'
import Link from 'next/link'

const Footer = () => {

    const [activeNav, setActiveNav] = useState("Home");

    const footComp = [
        { name: 'Home', link: '#Home' },
        { name: 'Our Products', link: '#Products' },
        { name: 'About us', link: '#About' },
        { name: 'Contact us', link: '#Contact' },
        { name: 'Help', link: '#Help' },
    ];

    return (
        <div
            className='h-[70vh] py-10 pl-10 pr-28 bg-cover bg-no-repeat flex flex-col justify-center '
            style={{ backgroundImage: `url(${FooterBg.src})` }}
        >
            <div className='flex justify-between items-center h-full'>
                <Image width={400} height={100} src={footerlogo} alt="Logo" />
                <button className='text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex items-center flex-col space-y-2 group'>
                    <a href="mailto:official.kokoma@gmail.com">
                        <div
                            className='flex space-x-1 items-center'>
                            <span className='font-light leading-[34px] md:text-[20px]'>
                                official.kokoma@gmail.com
                            </span>
                            <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                    <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'>
                    </div>
                </button>
            </div>
            <div className='flex justify-evenly items-center font-light w-full'>
                {footComp.map((nav) => (
                    <div key={nav.name} className='flex flex-col items-center'>
                        <Link
                            href={nav.link}
                            className={`text-white hover:underline underline-offset-2 transition-all duration-300`}
                            onClick={() => setActiveNav(nav.name)}
                        >
                            {nav.name}
                        </Link>
                    </div>
                ))}
            </div>
            <div className='w-full flex items-center justify-center space-x-40 mt-10 '>
                <a className='hover:scale-110 transition-transform ' href="">
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0049 0.925293C5.82293 0.925293 0 6.74822 0 13.9302C0 20.4499 4.80313 25.834 11.0606 26.7746V17.3765H7.84302V13.9583H11.0606V11.6836C11.0606 7.91758 12.8954 6.26488 16.0253 6.26488C17.5241 6.26488 18.3174 6.3765 18.6923 6.42635V9.40989H16.5574C15.2287 9.40989 14.7649 10.6703 14.7649 12.09V13.9583H18.6587L18.131 17.3765H14.7649V26.8017C21.1123 25.9412 26.0097 20.5139 26.0097 13.9302C26.0097 6.74822 20.1868 0.925293 13.0049 0.925293Z" fill="white" />
                    </svg>
                </a>
                <a className='hover:scale-110 transition-transform ' href="">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.59382 0.925293C3.41167 0.925293 0.00976562 4.33035 0.00976562 8.51358V19.351C0.00976562 23.5331 3.41482 26.935 7.59806 26.935H18.4354C22.6176 26.935 26.0195 23.53 26.0195 19.3467V8.50935C26.0195 4.3272 22.6144 0.925293 18.4312 0.925293H7.59382ZM20.6008 5.26025C21.199 5.26025 21.6845 5.74576 21.6845 6.34399C21.6845 6.94221 21.199 7.42773 20.6008 7.42773C20.0026 7.42773 19.5171 6.94221 19.5171 6.34399C19.5171 5.74576 20.0026 5.26025 20.6008 5.26025ZM13.0146 7.42773C16.6007 7.42773 19.5171 10.3441 19.5171 13.9302C19.5171 17.5163 16.6007 20.4326 13.0146 20.4326C9.42854 20.4326 6.5122 17.5163 6.5122 13.9302C6.5122 10.3441 9.42854 7.42773 13.0146 7.42773ZM13.0146 9.59521C11.8649 9.59521 10.7623 10.0519 9.94936 10.8649C9.1364 11.6778 8.67968 12.7805 8.67968 13.9302C8.67968 15.0799 9.1364 16.1825 9.94936 16.9954C10.7623 17.8084 11.8649 18.2651 13.0146 18.2651C14.1643 18.2651 15.2669 17.8084 16.0799 16.9954C16.8929 16.1825 17.3496 15.0799 17.3496 13.9302C17.3496 12.7805 16.8929 11.6778 16.0799 10.8649C15.2669 10.0519 14.1643 9.59521 13.0146 9.59521Z" fill="white" />
                    </svg>
                </a>
                <a className='hover:scale-110 transition-transform ' href="">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.3928 24.811L14.8613 10.9153L14.8776 10.9283L23.4716 0.96875H20.5997L13.5988 9.07512L8.0392 0.96875H0.507214L9.4058 13.9422L9.40471 13.9411L0.0195312 24.811H2.89144L10.6749 15.7921L16.8608 24.811H24.3928ZM6.90127 3.13623L20.2746 22.6435H17.9988L4.61458 3.13623H6.90127Z" fill="white" />
                    </svg>
                </a>
                <a className='hover:scale-110 transition-transform ' href="">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0776 0.96875H2.57031C1.37278 0.96875 0.402832 1.9387 0.402832 3.13623V22.6435C0.402832 23.8411 1.37278 24.811 2.57031 24.811H22.0776C23.2751 24.811 24.2451 23.8411 24.2451 22.6435V3.13623C24.2451 1.9387 23.2751 0.96875 22.0776 0.96875ZM7.93915 20.4761H4.74212V10.1892H7.93915V20.4761ZM6.30813 8.71857C5.27749 8.71857 4.4441 7.88301 4.4441 6.85454C4.4441 5.82607 5.27857 4.99159 6.30813 4.99159C7.33551 4.99159 8.17107 5.82715 8.17107 6.85454C8.17107 7.88301 7.33551 8.71857 6.30813 8.71857ZM19.9145 20.4761H16.7196V15.4735C16.7196 14.2803 16.6979 12.7457 15.0582 12.7457C13.3947 12.7457 13.1389 14.0451 13.1389 15.3868V20.4761H9.94407V10.1892H13.0111V11.5948H13.0544C13.4814 10.7863 14.524 9.93344 16.0791 9.93344C19.3162 9.93344 19.9145 12.0641 19.9145 14.8341V20.4761Z" fill="white" />
                    </svg>
                </a>
            </div>
            <span className='mt-10 text-center font-[200] text-[12px] leading-[100%] '>© Copyright are reserved by Kokoma</span>
        </div>
    )
}

export default Footer
