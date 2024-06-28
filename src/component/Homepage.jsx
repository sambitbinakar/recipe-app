import { Heart, HeartPulse, Search, Soup } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recipecard from "./Recipecard";
const App_Id = import.meta.env.VITE_APP_ID;
const App_key = import.meta.env.VITE_APP_KEY;
function Homepage() {
  const [recipe, setrecipe] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchrecipe = async (searchQuery) => {
    setloading(true);
    setrecipe([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${App_Id}&app_key=${App_key}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      setrecipe(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchrecipe("chicken");
  }, []);
  const handleSearch =(e)=>{
    e.preventDefault();
    fetchrecipe(e.target[0].value);
  }
  return (
    <div className=" p-10 flex-1">
      <div className=" max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch}>
          <label className=" input shadow-md flex items-center gap-1 border border-green-400 w-full">
            <Search size={"24"} />
            <input
              type="text"
              className="text-md md:text-2md grow outline-1"
              placeholder="search your today meal"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text mt-8"> Recommended Recipes</p>
        <p className=" text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight mt-4">
          Popular choice
        </p>
        <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-black">
            {!loading && recipe.map(({recipe},index)=>(
                <Recipecard key={index} recipe={recipe}/>
            ))}
          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Homepage;
