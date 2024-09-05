import React from 'react'
import img from '../Food/4.avif'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/Cardlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='bg-green-600 w-full lg:w-[23vw] rounded-md '>
                <div className='p-3 flex flex-col items-center' >
                    <img className='w-[60vw] lg:w-[210px] h-[100px] rounded-md hover:scale-110 transition-all duration-500 cursor-grab ' src={image} alt="" />
                </div>
                <div className='p-3 bg-slate-600 rounded-b-md'>
                    <div className='font-semibold flex items-center justify-between'>
                        <h1>{name}</h1>
                        <h1>$: {price}</h1>
                    </div>
                    <p>{desc}.</p>
                    <div className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <IoStar className='text-yellow-400 text-2xl' />
                            <h1 className='font-semibold'>{rating}</h1>
                        </span>
                        <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='bg-blue-950 px-2 rounded-md font-semibold  hover:bg-green-500 hover:text-black transition-all duration-500'>Add To Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCard