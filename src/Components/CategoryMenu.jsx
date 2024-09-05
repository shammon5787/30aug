import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = ()=>{
        const UniqueCategoru = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(UniqueCategoru)
    }
    useEffect(() => {
      ListUniqueCategory()
    }, [])

    const dispatch = useDispatch()
    
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='py-2 overflow-x-scroll lg:overflow-x-hidden flex items-center gap-5'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-500 hover:text-black transition-all duration-500'>All</button>
            {
                categories.map((category ,i)=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-500 hover:text-black transition-all duration-500'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu