import React from 'react'
import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
function Recipecard() {
  return (
    <div>
      <div className=" flex flex-col rounded-md bg-green-100 overflow-hidden p-3 relative ">
        <a href="#" className=" relative h-40">
          <img
            src="./image1.png"
            alt=""
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className=" absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-green-800 font-medium">
            <Soup size={"20"} />4 serving
          </div>
          <div className=" absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer ">
            <Heart
              size={20}
              className="hover:fill-red-600 hover:text-red-500"
            />
          </div>
        </a>
        <div className="flex mt-1">
          <p className="font-bold tracking-wide text-black">Roasted Chicken</p>
        </div>
        <p className="my-2">Turkish kitchen</p>
        <div className="flex gap-2 mt-auto">
          <div className="flex gap-1 bg-[#fcad6c] items-center p-1 rounded-md ">
            <HeartPulse size={20} />
            <span className="text-sm tracking-tighter font-semibold">
              Gluten-free
            </span>
          </div>
          <div className="flex gap-1 bg-[#fcad6c] items-center p-1 rounded-md ">
            <HeartPulse size={20} />
            <span className="text-sm tracking-tighter font-semibold">
              Heart-friendly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipecard