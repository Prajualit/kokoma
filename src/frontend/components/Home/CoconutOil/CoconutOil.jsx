import React from 'react'
import Image from 'next/image'
import coconut from '@/frontend/assets/Home/CoconutOil/coconut.png'
import image from '@/frontend/assets/Home/CoconutOil/image.png'

const CoconutOil = () => {
    return (
        <div className=' p-20 text-[#112D4E] flex flex-col items-center justify-center space-y-10'>
            <div className='flex items-center justify-between'>
                <Image src={coconut} alt="Coconut Oil" width={660.5263061523438} height={377} />
                <div className='flex flex-col space-y-3 w-[45%]'>
                    <h1 className='font-[600] text-[50px] leading-[100%] '>
                        Coconut Oil
                    </h1>
                    <p className='font-[300]  leading-[100%] text-left'>
                        Experience the richness of 100% natural, cold-pressed coconut oil. Perfect for cooking, skincare, and hair nourishment, our oil is free.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-end space-x-24 '>
                <div className='flex flex-col space-y-3 w-[55%]'>
                    <h1 className='font-[600] w-full text-[50px] leading-[100%] text-right'>
                        Pure Coconut Oil
                    </h1>
                    <p className='font-[300] leading-[100%] text-right '>
                        Experience the richness of 100% natural, cold-pressed coconut oil. Perfect for cooking, skincare, and hair nourishment, our oil is free.
                    </p>
                </div>
                <Image src={image} alt="Coconut Oil" width={437} height={377} />
            </div>
            <div className='flex items-center justify-between'>
                <Image src={coconut} alt="Coconut Oil" width={660.5263061523438} height={377} />
                <div className='flex flex-col space-y-3 w-[45%]'>
                    <h1 className='font-[600] text-[50px] leading-[100%] '>
                        Coconut Oil
                    </h1>
                    <p className='font-[300] leading-[100%] text-left'>
                        Experience the richness of 100% natural, cold-pressed coconut oil. Perfect for cooking, skincare, and hair nourishment, our oil is free.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-end space-x-24 '>
                <div className='flex flex-col space-y-3 w-[55%]'>
                    <h1 className='font-[600] w-full text-[50px] leading-[100%] text-right'>
                        Pure Coconut Oil
                    </h1>
                    <p className='font-[300] leading-[100%] text-right '>
                        Experience the richness of 100% natural, cold-pressed coconut oil. Perfect for cooking, skincare, and hair nourishment, our oil is free.
                    </p>
                </div>
                <Image src={image} alt="Coconut Oil" width={437} height={377} />
            </div>
        </div>
    )
}

export default CoconutOil
