import React from 'react'
import { useContext } from "react";
import { AppContext } from "../Context/Context";

const Favorites = () => {


  const { favorites, addFavorites, removeFavorites } = useContext(AppContext);

  console.log(favorites);

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id == id);
    return boolean;
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {favorites.length > 0? favorites.map((fav) => (
          <div
            className="text-center flex flex-col items-center justify-center m-3 shadow-xl"
            key={fav.id}
          >
            <div>
              <h1 className="font-bold">{fav.title}</h1>
            </div>
            <div>
              <img className=" h-72" src={fav.image_url} alt="" />
            </div>
            <div className="m-2">
              {favoriteChecker(fav.id) ? (
                <button
                  onClick={() => removeFavorites(fav.id)}
                  className="border-2 hover:bg-orange-400 hover:text-white text-orange-400 font-bold w-32 h-10 rounded-lg"
                >
                  Remove❤️
                </button>
              ) : (
                <button
                  onClick={() => addFavorites(fav)}
                  className="border-2 hover:bg-orange-400 hover:text-white text-orange-400 font-bold w-32 h-10 rounded-lg"
                >
                  Add To ❤️
                </button>
              )}
            </div>
          </div>
        )):<div className='text-center mt-6'><h2 className=' font-bold text-4xl' style={{margin:'auto'}}>You Dont Have Favorites!!</h2></div>}
      </div>
    </>
  )
}

export default Favorites