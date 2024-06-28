import React from 'react'
import Recipecard from './Recipecard';

function Favorites() {
const fav = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className=' text-white flex-1 min-h-screen'>
      <div className="max-w-screen-lg mx-auto">
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>
        {fav.length === 0 &&(
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="./404.png" alt="404" className='h-3/4' />
          </div>
        )}
        {fav && (
          <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 gap-4">
            {fav.map((recipe)=>(<Recipecard key={recipe.label} recipe={recipe}/>))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites