"use client";
import React, { useState } from "react";

const ProductQuantityChanger = ({ initialQuantity = 1, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrement = () => {
        setQuantity((prev) => {
            const newQuantity = prev + 1;
            if (onQuantityChange) onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => {
                const newQuantity = prev - 1;
                if (onQuantityChange) onQuantityChange(newQuantity);
                return newQuantity;
            });
        }
    };

    return (
        <div className="flex items-center space-x-6 bg-transparent border border-[#112D4E] rounded w-fit">
            <button
                onClick={handleDecrement}
                className={`text-xl px-3 py-1  ${quantity === 1 ? "text-[#4a4a4a75] cursor-not-allowed" : "text-[#112D4E] hover:bg-[#5b5b5b1f]"
                    }`}
                disabled={quantity === 1}
            >
                –
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
                onClick={handleIncrement}
                className="text-xl px-3 py-1 text-[#112D4E] hover:bg-[#5b5b5b1f]"
            >
                +
            </button>
        </div>
    );
};

export default ProductQuantityChanger;
