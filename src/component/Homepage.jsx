import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
import React from 'react'
import Recipecard from './Recipecard'

function Homepage() {
  return (
    <div className=' p-10 flex-1'>
        <div className=" max-w-screen-lg mx-auto">
            <form >
                <label className=' input shadow-md flex items-center gap-1 border border-green-400 w-full'>
                    <Search size={'24'}/>
                    <input type="text" className='text-md md:text-2md grow outline-1' placeholder='search your today meal'/>
                </label>
            </form>
            <p className='font-bold text-3xl md:text mt-8'> Recommended Recipes</p>
            <p className=' text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight mt-4'>Popular choice</p>
            <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-black">
                <Recipecard/>
                <Recipecard/>
                <Recipecard/>
                <Recipecard/>
            </div>
        </div>
    </div>
  )
}

export default Homepage