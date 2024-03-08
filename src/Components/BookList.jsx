import React, { useEffect, useState } from "react";
import { API_URL } from "../API";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addFavorites, removeFavorites, searchItem } =
    useContext(AppContext);

  console.log(favorites);

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id == id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {books.filter((book) => {
          if (searchItem == "") {
            return book;
          } else {

            return book.title.toLowerCase().includes(searchItem.toLowerCase())
          }
          
        })
        .map((book) => (
          <div
            className="text-center flex flex-col items-center justify-center m-3 shadow-xl"
            key={book.id}
          >
            <div>
              <h1 className="font-bold">{book.title}</h1>
            </div>
            <div className="">
              <img className=" h-72 " src={book.image_url} alt="" />
            </div>
            <div className="m-2">
              {favoriteChecker(book.id) ? (
                <button
                  onClick={() => removeFavorites(book.id)}
                  className="bg-orange-400 text-white font-bold w-32 h-10 rounded-lg hover:bg-orange-500"
                >
                  Remove ❤️
                </button>
              ) : (
                <button
                  onClick={() => addFavorites(book)}
                  className="border-2 hover:bg-orange-400 hover:text-white text-orange-400 font-bold w-32 h-10 rounded-lg "
                >
                  Add To ❤️
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
