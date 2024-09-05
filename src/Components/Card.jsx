import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
  const [activeCard, setactiveCard] = useState(true)
  const selectCart = useSelector((state)=>state.cart.cart)
  const totalitem = selectCart.reduce((totalitem, items)=>totalitem + items.qty, 0)
  const totalprice = selectCart.reduce((totalprice, items)=>totalprice + items.qty * items.price , 0)

  return (
    <>
      <div className={`bg-slate-800 fixed top-0 right-0 w-full h-full lg:w-[28vw] p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
        <div className='flex items-center justify-between font-semibold text-3xl '>
          <h1 className='capitalize'>your Order</h1>
          <IoClose onClick={() => setactiveCard(false)} className='text-4xl cursor-pointer hover:text-green-800 transition-all duration-500' />
        </div>

        {
          selectCart.map((food)=>{
            return(
              <CardItem key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} qty = {food.qty} />
            )
          })
        }

        <div className='font-semibold absolute bottom-0'>
          <h1>Total Item: {totalitem} </h1>
          <h1>Total Price: {totalprice} </h1>
          <hr />
          <button className='bg-blue-500 px-2 my-3 rounded-md font-semibold text-xl hover:bg-green-500 hover:text-black transition-all duration-500 w-[90vw] lg:w-[25vw] '>Check Out</button>
        </div>
      </div>
      <BiSolidCart onClick={() => setactiveCard(true)} className={`text-6xl cursor-pointer fixed right-8 bottom-6 bg-yellow-900 rounded-full ${selectCart.length > 0 ? "animate-bounce" : "animate-none"} `}/>
    </>
  )
}

export default Card