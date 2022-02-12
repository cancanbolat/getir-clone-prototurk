import { useEffect, useState } from 'react'
import Title from '../Title'
import BasketItem from './BasketItem'
import axios from "axios"
import { BASE_API_URL } from "constants/constants"
import { AiOutlinePlus } from 'react-icons/ai'

const Rubbish = () => {
    return (<svg data-testid="icon" name="delete-1" size="18" color="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.091 5.818h-5.818v-1.455c0-1.164-0.465-2.269-1.28-3.084s-1.935-1.28-3.084-1.28h-5.818c-1.164 0-2.269 0.465-3.084 1.28s-1.28 1.92-1.28 3.084v1.455h-5.818c-0.8 0-1.455 0.655-1.455 1.455s0.655 1.455 1.455 1.455h1.455v18.909c0 1.164 0.465 2.269 1.28 3.084s1.935 1.28 3.084 1.28h14.546c1.164 0 2.269-0.465 3.084-1.28s1.28-1.92 1.28-3.084v-18.909h1.455c0.8 0 1.455-0.655 1.455-1.455s-0.655-1.455-1.455-1.455zM11.636 4.364c0-0.393 0.16-0.756 0.422-1.033 0.276-0.276 0.64-0.422 1.033-0.422h5.818c0.393 0 0.756 0.145 1.033 0.422s0.422 0.64 0.422 1.033v1.455h-8.727v-1.455zM24.727 27.636c0 0.393-0.145 0.756-0.422 1.033s-0.64 0.422-1.033 0.422h-14.546c-0.393 0-0.756-0.145-1.033-0.422s-0.422-0.64-0.422-1.033v-18.909h17.455v18.909zM13.091 24.727c0.8 0 1.455-0.655 1.455-1.455v-8.727c0-0.8-0.655-1.455-1.455-1.455s-1.455 0.655-1.455 1.455v8.727c0 0.8 0.655 1.455 1.455 1.455zM20.364 23.273c0 0.8-0.655 1.455-1.455 1.455s-1.455-0.655-1.455-1.455v-8.727c0-0.8 0.655-1.455 1.455-1.455s1.455 0.655 1.455 1.455v8.727z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path></svg>)
}

const Decrease = () => {
    return (<svg data-testid="icon" name="minus" size="10" style="display:inline-flex" color="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M2 18h28c1.1 0 2-0.9 2-2s-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path></svg>)
}

export default function Basket({ basket }) {

    return (
        <>
            <div
                className='flex justify-between border-b-2 p-4 border-b-gray-100'>
                <div className=''>
                    <p className='text-sm'>{basket.title}</p>
                    <p className='text-sm font-semibold text-primary-brand-color'>₺ {basket.productPrice}</p>
                </div>
                <div className='flex'>
                    <button className='bg-white w-8 h-8 px-2 border border-gray-200 rounded-l-lg text-brand-color shadow-md'>
                        {/* {basket.quantity > 1
                            ? <Rubbish />
                            : <Decrease />
                        } */}
                    </button>
                    <p className='text-white bg-purple-800 w-8 h-8 py-1 text-center'>{basket.quantity}</p>
                    <button className='bg-white w-8 h-8 px-2 border border-gray-200 rounded-r-lg text-brand-color shadow-md'>
                        <AiOutlinePlus height={16} />
                    </button>
                </div>
            </div>
        </>
    )
}

