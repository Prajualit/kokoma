import React from 'react'
import Image from 'next/image'
import sample from '@/frontend/assets/Home/Explore/sample.png'
import ProductQuantityChanger from "./ProductQuantityChanger";

const Cart = () => {

    const cartHeaders = [
        {
            name: 'Products',
            width: '100%'
        },
        {
            name: 'Description',
            width: '100%'
        },
        {
            name: 'Price',
            width: '100%'
        },
        {
            name: 'SubTotal',
            width: '100%'
        }
    ]

    const handleQuantityChange = (newQuantity) => {
        console.log("Updated Quantity:", newQuantity);
    };

    return (
        <div className='p-20 flex flex-col space-y-14 '>
            <h1 className='text-[#112D4E] font-[600] text-[50px] leading-[100%] text-left  '>
                Your Cart
            </h1>
            <div>
                <div className='grid grid-cols-4 text-[#112D4E] w-full gap-10 '>
                    {cartHeaders.map((header, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <span className={`w-[${header.width}] ${header.name === "Price" || header.name === "SubTotal" ? "text-right" : "text-left"} `}>{header.name}</span>
                        </div>
                    ))}
                </div>
                <div className='border-[#112D4E] border w-[100%] '></div>
            </div>
            <div className='grid grid-cols-4 text-[#112D4E] w-full gap-10 '>
                <Image src={sample} width={300} height={300} alt="" />
                <div>
                    <h2 className='font-[600] text-[20px] leading-[177%] '>Product</h2>
                    <p className='font-[300] text-[12px] leading-[177%] text-left '>Kokoma 100% Pure Coconut Oil is enriched with a natural fragrance, making it perfect for baby body massage and hair care. Made from premium coconuts, it nourishes skin and strengthens hair. Ingredients: Pure coconut oil with natural fragrance. Key features: Non-greasy, deeply moisturizing, chemical-free, and ideal for sensitive skin.</p>
                    <span className='font-[400] text-[14px] leading-[177%] '>Net weight  : 100 mL  </span>
                    <div className='flex space-x-10 items-center mt-6 justify-start'>
                        <ProductQuantityChanger initialQuantity={1} onQuantityChange={handleQuantityChange} />
                        <button className='hover:scale-110 transition-transform duration-300'>
                            <svg width="30" height="30" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4977 5.79279H23.5353V2.71744C23.5353 1.2201 22.2212 0 20.6085 0H12.3917C10.779 0 9.46492 1.2201 9.46492 2.71744V5.79244L2.50213 5.79278C1.12173 5.79278 0 6.83427 0 8.11594V11H33V8.11594C33 6.83393 31.8783 5.79278 30.4979 5.79278L30.4977 5.79279ZM12.1197 2.71744C12.1197 2.57597 12.2393 2.46493 12.392 2.46493H20.6088C20.7546 2.46493 20.8807 2.57597 20.8807 2.71744V5.79244L12.1197 5.79278L12.1197 2.71744Z" fill="#112D4E" />
                                <path d="M0 13V36.9663C0 38.0932 1.26658 39 2.82211 39H30.1775C31.7411 39 32.9996 38.0873 32.9996 36.9663L33 13H0ZM9.812 30.6C9.812 31.428 8.88146 32.1041 7.72474 32.1041C6.57569 32.1041 5.63749 31.4335 5.63749 30.6L5.63706 21.3992C5.63706 20.5712 6.5676 19.8951 7.72432 19.8951C8.87337 19.8951 9.81157 20.5657 9.81157 21.3992L9.812 30.6ZM18.5916 34.4928C18.5916 35.3208 17.6611 35.9969 16.5044 35.9969C15.3553 35.9969 14.4171 35.3263 14.4171 34.4928L14.4167 17.5065C14.4167 16.6784 15.3472 16.0023 16.5039 16.0023C17.653 16.0023 18.5912 16.6729 18.5912 17.5065L18.5916 34.4928ZM27.3636 30.6C27.3636 31.428 26.4331 32.1041 25.2764 32.1041C24.1273 32.1041 23.1891 31.4335 23.1891 30.6L23.1887 21.3992C23.1887 20.5712 24.1192 19.8951 25.2759 19.8951C26.425 19.8951 27.3632 20.5657 27.3632 21.3992L27.3636 30.6Z" fill="#112D4E" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 300.00</span>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 600.00</span>
            </div>
            <div className='grid grid-cols-4 text-[#112D4E] w-full gap-10 '>
                <Image src={sample} width={300} height={300} alt="" />
                <div>
                    <h2 className='font-[600] text-[20px] leading-[177%] '>Product</h2>
                    <p className='font-[300] text-[12px] leading-[177%] text-left '>Kokoma 100% Pure Coconut Oil is enriched with a natural fragrance, making it perfect for baby body massage and hair care. Made from premium coconuts, it nourishes skin and strengthens hair. Ingredients: Pure coconut oil with natural fragrance. Key features: Non-greasy, deeply moisturizing, chemical-free, and ideal for sensitive skin.</p>
                    <span className='font-[400] text-[14px] leading-[177%] '>Net weight  : 100 mL  </span>
                    <div className='flex space-x-10 items-center mt-6 justify-start'>
                        <ProductQuantityChanger initialQuantity={1} onQuantityChange={handleQuantityChange} />
                        <button className='hover:scale-110 transition-transform duration-300'>
                            <svg width="30" height="30" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4977 5.79279H23.5353V2.71744C23.5353 1.2201 22.2212 0 20.6085 0H12.3917C10.779 0 9.46492 1.2201 9.46492 2.71744V5.79244L2.50213 5.79278C1.12173 5.79278 0 6.83427 0 8.11594V11H33V8.11594C33 6.83393 31.8783 5.79278 30.4979 5.79278L30.4977 5.79279ZM12.1197 2.71744C12.1197 2.57597 12.2393 2.46493 12.392 2.46493H20.6088C20.7546 2.46493 20.8807 2.57597 20.8807 2.71744V5.79244L12.1197 5.79278L12.1197 2.71744Z" fill="#112D4E" />
                                <path d="M0 13V36.9663C0 38.0932 1.26658 39 2.82211 39H30.1775C31.7411 39 32.9996 38.0873 32.9996 36.9663L33 13H0ZM9.812 30.6C9.812 31.428 8.88146 32.1041 7.72474 32.1041C6.57569 32.1041 5.63749 31.4335 5.63749 30.6L5.63706 21.3992C5.63706 20.5712 6.5676 19.8951 7.72432 19.8951C8.87337 19.8951 9.81157 20.5657 9.81157 21.3992L9.812 30.6ZM18.5916 34.4928C18.5916 35.3208 17.6611 35.9969 16.5044 35.9969C15.3553 35.9969 14.4171 35.3263 14.4171 34.4928L14.4167 17.5065C14.4167 16.6784 15.3472 16.0023 16.5039 16.0023C17.653 16.0023 18.5912 16.6729 18.5912 17.5065L18.5916 34.4928ZM27.3636 30.6C27.3636 31.428 26.4331 32.1041 25.2764 32.1041C24.1273 32.1041 23.1891 31.4335 23.1891 30.6L23.1887 21.3992C23.1887 20.5712 24.1192 19.8951 25.2759 19.8951C26.425 19.8951 27.3632 20.5657 27.3632 21.3992L27.3636 30.6Z" fill="#112D4E" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 300.00</span>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 600.00</span>
            </div>
            <div className='grid grid-cols-4 text-[#112D4E] w-full gap-10 '>
                <Image src={sample} width={300} height={300} alt="" />
                <div>
                    <h2 className='font-[600] text-[20px] leading-[177%] '>Product</h2>
                    <p className='font-[300] text-[12px] leading-[177%] text-left '>Kokoma 100% Pure Coconut Oil is enriched with a natural fragrance, making it perfect for baby body massage and hair care. Made from premium coconuts, it nourishes skin and strengthens hair. Ingredients: Pure coconut oil with natural fragrance. Key features: Non-greasy, deeply moisturizing, chemical-free, and ideal for sensitive skin.</p>
                    <span className='font-[400] text-[14px] leading-[177%] '>Net weight  : 100 mL  </span>
                    <div className='flex space-x-10 items-center mt-6 justify-start'>
                        <ProductQuantityChanger initialQuantity={1} onQuantityChange={handleQuantityChange} />
                        <button className='hover:scale-110 transition-transform duration-300'>
                            <svg width="30" height="30" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4977 5.79279H23.5353V2.71744C23.5353 1.2201 22.2212 0 20.6085 0H12.3917C10.779 0 9.46492 1.2201 9.46492 2.71744V5.79244L2.50213 5.79278C1.12173 5.79278 0 6.83427 0 8.11594V11H33V8.11594C33 6.83393 31.8783 5.79278 30.4979 5.79278L30.4977 5.79279ZM12.1197 2.71744C12.1197 2.57597 12.2393 2.46493 12.392 2.46493H20.6088C20.7546 2.46493 20.8807 2.57597 20.8807 2.71744V5.79244L12.1197 5.79278L12.1197 2.71744Z" fill="#112D4E" />
                                <path d="M0 13V36.9663C0 38.0932 1.26658 39 2.82211 39H30.1775C31.7411 39 32.9996 38.0873 32.9996 36.9663L33 13H0ZM9.812 30.6C9.812 31.428 8.88146 32.1041 7.72474 32.1041C6.57569 32.1041 5.63749 31.4335 5.63749 30.6L5.63706 21.3992C5.63706 20.5712 6.5676 19.8951 7.72432 19.8951C8.87337 19.8951 9.81157 20.5657 9.81157 21.3992L9.812 30.6ZM18.5916 34.4928C18.5916 35.3208 17.6611 35.9969 16.5044 35.9969C15.3553 35.9969 14.4171 35.3263 14.4171 34.4928L14.4167 17.5065C14.4167 16.6784 15.3472 16.0023 16.5039 16.0023C17.653 16.0023 18.5912 16.6729 18.5912 17.5065L18.5916 34.4928ZM27.3636 30.6C27.3636 31.428 26.4331 32.1041 25.2764 32.1041C24.1273 32.1041 23.1891 31.4335 23.1891 30.6L23.1887 21.3992C23.1887 20.5712 24.1192 19.8951 25.2759 19.8951C26.425 19.8951 27.3632 20.5657 27.3632 21.3992L27.3636 30.6Z" fill="#112D4E" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 300.00</span>
                <span className='font-[600] text-[14px] leading-[177%] text-right '>Rs. 600.00</span>
            </div>
        </div>
    )
}

export default Cart
