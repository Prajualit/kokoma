import React from 'react'
import Sample from '@/frontend/assets/Home/Explore/sample.png'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='m-20 flex flex-col space-y-14 '>
      <h1 className='text-[#112D4E] font-[600] text-[50px] leading-[100%] text-left  '>
        Our Products
      </h1>
      <div className='w-fit flex flex-col space-y-2'>
        <div className='bg-[#112D4E] p-6 '>
          <div className='flex flex-col items-center space-y-2'>
            <Image src={Sample} alt="Sample" width={250} height={250} />
            <div className='flex justify-between items-end w-full'>
              <span className='text-center font-[600] text-[25px] leading-[100%] '>Product</span>
              <div className='flex flex-col items-end space-y-2 '>
                <span className='font-[200] text-[12px] leading-[100%] line-through '>Rs. 300.00</span>
                <span className='font-[400] leading-[100%] '>Rs. 200.00</span>
              </div>
            </div>
            <p className='w-[250px] font-[300] leading-[100%] '>
              Experience the richness of 100% natural, cooking,  nourishment,  oil is free .
            </p>
          </div>
        </div>
        <button className='relative group flex justify-between items-center w-full border border-[#112D4E] px-6 py-2 overflow-hidden'>
          <span className="absolute inset-0 bg-[#112D4E] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          <span className='relative text-[#112D4E] group-hover:text-white transition-all duration-300'>
            Buy now
          </span>
          <svg width="26" height="22" viewBox="0 0 26 22" fill="#112D4E" xmlns="http://www.w3.org/2000/svg"
            className="relative group-hover:fill-white transition-all duration-300">
            <path d="M26 10.9996C26 10.7316 25.8267 10.3761 25.6511 10.2033L15.7464 0.361484C15.2842 -0.0855861 14.5349 -0.137664 13.9959 0.316148C13.514 0.721919 13.502 1.51282 13.9475 1.95362L21.8982 9.84163H1.23832C0.554355 9.84163 0 10.3601 0 10.9997C0 11.6393 0.554367 12.1578 1.23832 12.1578H21.8982L13.9475 20.0458C13.502 20.4861 13.5332 21.2577 13.9959 21.6832C14.4841 22.1321 15.2914 22.0922 15.7464 21.6379L25.6511 11.7961C25.9419 11.529 25.9952 11.2722 26 11.0002V10.9996Z" />
          </svg>
        </button>
        <button className='relative group bg-[#112D4E] hover:bg-transparent transition-colors duration-300 flex justify-center items-center w-full border border-[#112D4E] px-6 py-2 overflow-hidden'>
          <span className='relative group-hover:text-[#112D4E] text-white transition-all duration-300'>
            Add to cart
          </span>
        </button>

      </div>
    </div>
  )
}

export default Products
