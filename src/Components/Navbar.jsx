/** @format */

import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { RentContext } from "../RentContext";
import data from "../data.json";

function Navbar() {
  const { likedProperties, searchQuery, setSearchQuery, setResult } =
    useContext(RentContext);
  const setloved = () => {
    // e.preventDefault();
    setResult(likedProperties);
  };

  const serachResult = () => {
    const temp = data.filter(
      (ele) =>
        ele.name.includes(searchQuery) ||
        ele.city.includes(searchQuery.toUpperCase()) ||
        ele.type.includes(searchQuery)
    );
    // console.log(temp);
    setResult((prev) => temp);
    setSearchQuery("");
  };

  return (
    <header className='w-full bg-gradient-to-r from-violet-700 to-blue-800 p-3'>
      <nav className='text-white md:text-2xl lg:text-4xl flex justify-around items-center font-medium w-full'>
        <button className='hover:text-sky-500' onClick={() => setResult(data)}>
          <FaHome />
        </button>
        <h1>Search properties to rent</h1>
        <div className='flex gap-3 flex-wrap justify-center items-center md:text-xl font-normal'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery((prev) => e.target.value)}
            className='border border-slate-500 rounded-md p-1 text-center text-black outline-violet-700'
            placeholder='Search...'
          />{" "}
          <button
            onClick={() => serachResult()}
            className='border rounded-md p-1 hover:bg-blue-700 shadow-md shadow-blue-950 hover:shadow-none'
          >
            Search
          </button>{" "}
          <button
            className='border rounded-md p-1 hover:bg-blue-700 shadow-md shadow-blue-950 hover:shadow-none'
            onClick={(e) => setResult(likedProperties)}
          >
            Liked
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
