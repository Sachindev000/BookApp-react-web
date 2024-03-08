import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import BookList from "./Components/BookList";
import Favorites from "./Components/Favorites";
import BookDetails from "./Components/BookDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/BookApp-react-web" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
