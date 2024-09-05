import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1> {new Date().toDateString()} </h1>
            <h1 className='uppercase'> welcome to new fast food center </h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='bg-slate-100 p-2 w-full lg:w-[25vw] rounded-md text-black outline-none ' type="search" placeholder='search here' name="search" id="" />
    </div>
  )
}

export default Navbar