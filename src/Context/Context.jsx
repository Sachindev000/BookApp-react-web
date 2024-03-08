import { createContext, useState } from "react";



export const AppContext = createContext();

const AppContextProvider = ({children}) => {

  const [favorites,setFavorites]=useState([])

  const [searchItem,setSearchItem]=useState("")


  const handleInputChange=(e)=>{
    setSearchItem(e.target.value)
  }

 

  
  const addFavorites=(book)=>{
    const currentFavorites=[...favorites]

    const newFavorites = currentFavorites.concat(book)

    setFavorites(newFavorites)


  }
    
  const removeFavorites=(id)=>{

    const currentFavorites = [...favorites]

    const newFavorites = currentFavorites.filter((book)=>book.id !== id)

    setFavorites(newFavorites)
  }
    



  return(
  <AppContext.Provider value={{favorites,addFavorites,removeFavorites,searchItem,setSearchItem,handleInputChange}}>
   {children}
    </AppContext.Provider>)
};

export default AppContextProvider;