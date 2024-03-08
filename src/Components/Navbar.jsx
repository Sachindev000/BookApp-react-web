import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/Context";

const Navbar = () => {
  const { searchItem, handleInputChange, favorites } = useContext(AppContext);
  console.log(searchItem);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <h1 className="text-3xl font-bold text-orange-400 ">
                    Your<span className="text-white">Store</span>
                  </h1>
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block  space-x-4 ">
              <input
                className="outline-none rounded-lg  p-2 w-64 font-medium md:h-12"
                onChange={handleInputChange}
                value={searchItem}
                type="text"
                placeholder="Search Book.."
              />
              <Link to={"/favorites"}>
                <button className="w-32 h-10 font-bold  hover:bg-orange-400 border-2 hover:text-white  text-orange-500 ">
                  ❤️Favorites{" "}
                  <span className="text-red-500 font-extrabold">
                    {favorites.length === 0 ? "" : favorites.length}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <input
              className="outline-none rounded-lg h-8 p-2 font-medium w-[100%]"
              onChange={handleInputChange}
              value={searchItem}
              type="text"
              placeholder="Search Book.."
            />
            <br />
            <br />
            <Link to={"/favorites"}>
              <button className="bg-orange-400 w-32 h-10 font-bold text-white rounded-lg hover:bg-orange-500 ">
                ❤️Favorites
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
