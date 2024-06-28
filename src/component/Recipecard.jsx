import React, { useState } from 'react'
import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
const gettwovalueinarray = (arr)=>{
  return [arr[0],arr[1]]
}
function Recipecard({recipe}) {
  const helthlabel = gettwovalueinarray(recipe.healthLabels);
  const [isFav, setisFav] = useState(localStorage.getItem("favorites")?.includes(recipe.label))
  const addRecipeTofav =()=>{
    let favorite = JSON.parse(localStorage.getItem('favorites')) || [];
    const isRecipeAlreadyFav = favorite.some((fav)=> fav.label === recipe.label);

    if(isRecipeAlreadyFav){
      favorite = favorite.filter((fav)=>fav.label !== recipe.label);
      setisFav(false)
    }else{
      favorite.push(recipe);
      setisFav(true);
    }
    localStorage.setItem("favorites",JSON.stringify(favorite));
  }
  return (
    <div>
      <div className=" flex flex-col rounded-md bg-green-100 overflow-hidden p-3 relative ">
        <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} target='_blank' className=" relative h-40">
        <div className="skeleton absolute inset-0"></div>
          <img
            src={recipe.image}
            alt=""
            className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
            onLoad={(e)=>{
              e.currentTarget.style.opacity = 1;
              e.currentTarget.previousSibling.style.display = "none";
            }}
          />
          <div className=" absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-green-800 font-medium">
            <Soup size={"20"} />{recipe.yield} serving
          </div>
          <div className=" absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer "
          onClick={(e)=>{
            e.preventDefault();
            addRecipeTofav();
          }}>
            {!isFav &&<Heart
              size={20}
              className="hover:fill-red-600 hover:text-red-500"
            />}
            {isFav &&<Heart
              size={20}
              className="fill-red-600 text-red-500"
            />}
          </div>
        </a>
        <div className="flex mt-1">
          <p className="font-bold tracking-wide text-black">{recipe.label}</p>
        </div>
        <p className="my-2">{recipe.cuisineType[0].charAt(0).toUpperCase()+recipe.cuisineType[0].slice(1)} kitchen</p>
        <div className="flex gap-2 mt-auto">
          {helthlabel.map((label,idx)=>(
            <div key={idx} className="flex gap-1 bg-[#fcad6c] items-center p-1 rounded-md ">
            <HeartPulse size={20} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipecard