"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {

    const faqs = [
        {
            question: "What makes Kokoma Coconut Oil different from other brands?",
            answer: "Kokoma Coconut Oil is 100% pure and natural, with no additives, preservatives, or artificial processing. It is versatile and can be used for cooking, skincare, haircare, and wellness. We work directly with local farmers, promoting ethical and sustainable farming practices. Our coconut oil is rich in nutrients, packed with healthy fats, vitamins, and antioxidants for maximum benefits."
        },
        {
            question: "How can I use Kokoma Coconut Oil?",
            answer: "Kokoma Coconut Oil can be used in various ways. For cooking, you can use it as a substitute for other cooking oils or butter. For skincare, you can apply it directly to your skin or use it as a natural moisturizer. For haircare, you can use it as a hair mask or conditioner. For wellness, you can add it to your diet or use it for oil pulling."
        },
        {
            question: "Is Kokoma Coconut Oil suitable for all skin types?",
            answer: "Yes, Kokoma Coconut Oil is suitable for all skin types. It is non-comedogenic, meaning it won't clog your pores. It is also hypoallergenic, making it safe for sensitive skin. Whether you have dry, oily, or combination skin, Kokoma Coconut Oil can help nourish and hydrate your skin."
        },
        {
            question: "Can I use Kokoma Coconut Oil for oil pulling?",
            answer: "Yes, you can use Kokoma Coconut Oil for oil pulling. Oil pulling is an ancient Ayurvedic practice that involves swishing oil in your mouth to remove toxins and improve oral health. Kokoma Coconut Oil is ideal for oil pulling as it has antimicrobial properties that can help kill bacteria and promote oral hygiene."
        },
        {
            question: "How do I store Kokoma Coconut Oil?",
            answer: "To maintain the quality and shelf life of Kokoma Coconut Oil, store it in a cool, dry place away from direct sunlight and heat. Avoid exposing it to moisture or water, as this can cause the oil to spoil."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col space-y-20 items-center p-20'>
            <div>
                <h1 className='font-[600] text-[#112D4E] text-[77.66px] leading-[100%] text-center'>FAQ</h1>
                <h2 className='font-[500] text-[#112D4E] text-[48px] leading-[100%] text-center'>( Frequently Asked Questions )</h2>
            </div>
            <div className="flex flex-col space-y-4 items-center w-full justify-center">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ borderRadius: "999px" }}
                            animate={{ borderRadius: isOpen ? "28px" : "999px" }} // Instantly changes on click
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className={`bg-[#112D4E] py-5 px-10 w-[70%] transition-all duration-200`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-[400] text-[#BBE1FA] text-[18.34px] leading-[100%] text-left">
                                    {index + 1}. {faq.question}
                                </span>
                                <motion.button
                                    animate={{ rotate: isOpen ? 180 : 0 }} // Rotates instantly
                                    transition={{ duration: 0.2 }}
                                >
                                    <svg
                                        className="hover:translate-y-1 transform transition-transform"
                                        width="26"
                                        height="15"
                                        viewBox="0 0 26 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.39153 3.86325C0.634449 3.06164 0.634409 1.80854 1.39144 1.00688C2.21229 0.137645 3.5952 0.137633 4.41606 1.00685L10.7368 7.69998C11.9207 8.95356 13.9151 8.95361 15.099 7.70008L21.4206 1.00674C22.2415 0.137567 23.6244 0.137613 24.4452 1.00684C25.2022 1.80852 25.2022 3.06165 24.4451 3.86328L15.0993 13.7587C13.9154 15.0122 11.9211 15.0122 10.7372 13.7587L1.39153 3.86325Z"
                                            fill="#BBE1FA"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-[400] text-[#BBE1FA] text-left mt-3">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div >
    )
}

export default Faq
