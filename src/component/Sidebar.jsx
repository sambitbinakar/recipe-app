import { Heart, Home } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='h-screen'>
    <Desktopsidebar/>
    <Mobilesidebar/>
    </div>
  )
}

export default Sidebar

const Desktopsidebar = ()=>{
    return(
        <div className='p-3 md:p-10  min-h-screen w-24 md:w-64 hidden sm:block'>
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className=" w-full ">
                    <img src="./logo.png" alt="Logo" className='hidden md:block w-48 h-24 object-cover'/>
                    <img src="./mobile-logo.png" alt="mobile"  className=' block md:hidden  w-20 h-18 object-cover p-5'/>
                </div>
                <ul className="flex flex-col items-center md:items-start gap-8">
                    <Link to={"/"} className=' flex gap-3'>
                    <Home color='green' size={'24'}/>
                    <span className='font-bold hidden md:block'>Home</span>
                    </Link>
                    <Link to={"/favorites"} className=' flex gap-3'>
                    <Heart color='green' size={'24'}/>
                    <span className='font-bold hidden md:block'>Favorites</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
const Mobilesidebar = ()=>{
    return(
        <div className=" flex justify-center gap-10 shadow-md border-t fixed w-full bottom-0 left-0 backdrop-blur-sm bg-transparent p-2 sm:hidden">
            <Link to={'/'}>
            <Home size={'24'} color='green' className=' cursor-pointer'/> 
            </Link>
            <Link to={'/favorites'}>
            <Heart size={'24'} color='green' className=' cursor-pointer'/>
            </Link>
            
        </div>
    )
}