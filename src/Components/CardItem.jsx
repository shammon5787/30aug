import React from 'react'
import img from '../Food/9.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removerCard } from '../Store/Cardlice';

const CardItem = ({id, name, price, image, qty}) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-green-700 p-2 rounded-md flex gap-5 mt-0.5'>
        <MdDelete onClick={()=>dispatch(removerCard({id}))}  className='absolute right-5 cursor-pointer hover:text-red-950 text-xl'/>
        <img className='w-[50px] h-[50px] rounded-full ' src= {image} alt="" />
        <div className='flex bg-slate-900 w-full h-full rounded-md px-2 mr-5 font-semibold  py-0.5'>
            <div>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center gap-3 absolute mt-7 right-11'>
                <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})): qty + 1} className='font-semibold text-2xl cursor-pointer hover:text-yellow-500' />
                <span>{qty}</span>
                <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='font-semibold text-2xl cursor-pointer hover:text-yellow-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem