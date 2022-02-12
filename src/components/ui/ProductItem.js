import axios from 'axios';
import { BASE_API_URL } from 'constants/constants';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'

export default function ProductItem({ product, addToCart }) {

    const userId = localStorage.getItem("nameIdentifier");
    const quantity = 1;

    const cartItem = {
        userId,
        productId: product.productId,
        quantity,
        totalPrice: product.productPrice,
        productPrice: product.price
    }

    return (
        <div className="relative bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3">
            <button onClick={() => addToCart(cartItem)}
                className='absolute top-3 right-3 w-8 h-8 bg-white flex items-center justify-center border border-gray-200 rounded-lg
                text-brand-color shadow-md transition-colors hover:border-brand-color'>
                <AiOutlinePlus height={16} />
            </button>
            <img src={product.imageUrl} alt={product.productTitle} />
            <div className="text-brand-color">{product.price} ₺</div>
            <div className="text-gray-900">{product.productTitle}</div>
            <div className="text-gray-500">{product.infos}</div>
        </div>
    );
}
