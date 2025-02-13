/** @format */

import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PropertyCard from "./Components/PropertyCard";
import SearchBar from "./Components/SearchBar";
import { RentContext } from "./RentContext";

function App() {
  const { result } = useContext(RentContext);
  // console.log(result);
  return (
    <div className='container min-w-full'>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className='propbox flex items-center w-full flex-row justify-center flex-wrap gap-16 p-10'>
        {result.length ? (
          result.map((element, index) => (
            <PropertyCard data={element} key={index}></PropertyCard>
          ))
        ) : (
          <p className='w-full text-center p-6 text-3xl text-gray-600'>
            No match found....
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
