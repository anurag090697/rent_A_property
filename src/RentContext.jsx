/** @format */

import { createContext, useEffect, useState } from "react";
import data from "./data.json";
import React from "react";

const RentContext = createContext();

function RentContextProvider({ children }) {
  const [result, setResult] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState({
    city: "All",
    date: "",
    price: "0-3000",
    propertyType: "All",
  });
  const [likedProperties, setLikedProperties] = useState([]);
  //   console.log(searchQuery);
  useEffect(() => {
    let temp = localStorage.getItem("likedProperties");
    //   console.log(JSON.parse(temp));
    let lk = JSON.parse(temp);
    setLikedProperties(lk);
  }, []);

  useEffect(() => {
    let tm = JSON.stringify(likedProperties);
    localStorage.setItem("likedProperties", tm);
    // console.log(likedProperties);
  }, [likedProperties]);

  return (
    <RentContext.Provider
      value={{
        result,
        setResult,
        filterData,
        setFilterData,
        likedProperties,
        setLikedProperties,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </RentContext.Provider>
  );
}

export { RentContextProvider, RentContext };
