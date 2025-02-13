/** @format */

import React, { useContext } from "react";
import { RentContext } from "../RentContext";
import data from "../data.json";

function SearchBar() {
  const { filterData, setFilterData, setResult } = useContext(RentContext);

  const setData = (e) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({ ...prev, [name]: value }));
  };
  //   console.log(filterData);
  const filterProperties = (e) => {
    e.preventDefault();
    const obj = {
      city: filterData.city == "All" ? "" : filterData.city.toUpperCase(),
      date: "",
      priceMin: 0,
      priceMax: 3000,
      propertyType:
        filterData.propertyType == "All" ? "" : filterData.propertyType,
    };

    let prc = filterData.price.split("-");
    obj.priceMin = parseInt(prc[0]) || 0;
    obj.priceMax = parseInt(prc[1]) || 3000;
    const temp = data.filter((ele) => {
      const matchesCity = obj.city ? ele.city.includes(obj.city) : true;

      const matchesType = obj.propertyType
        ? ele.type === obj.propertyType
        : true;

      const matchesPrice =
        ele.price >= obj.priceMin && ele.price <= obj.priceMax;

      return matchesCity && matchesType && matchesPrice;
    });
    // console.log(temp);
    setResult((prev) => temp);
    setFilterData({
      city: "All",
      date: "",
      price: "0-3000",
      propertyType: "All",
    });
  };

  return (
    <form
      action=''
      onSubmit={(e) => filterProperties(e)}
      className='flex flex-wrap items-center justify-center w-fit p-5 bg-gray-100 mx-auto my-5'
    >
      <div className='border-r border-slate-400  p-3 flex flex-col h-24 w-60'>
        <label htmlFor=''>Enter city</label>
        <input
          type='text'
          name='city'
          onChange={(e) => setData(e)}
          value={filterData.city}
          className='rounded-md py-1 px-3 border border-slate-400 focus:ring-4 outline-none focus:border-none'
        />
      </div>{" "}
      <div className='border-r border-slate-400  p-3 flex flex-col h-24 w-60'>
        <label htmlFor=''>Date</label>
        <input
          type='date'
          name='date'
          onChange={(e) => setData(e)}
          className='rounded-md py-1 px-3 border border-slate-400 focus:ring-4 outline-none focus:border-none'
        />
      </div>{" "}
      <div className='border-r border-slate-400  p-3 flex flex-col h-24 w-60'>
        <label htmlFor=''>Price </label>
        <select
          name='price'
          id=''
          value={filterData.price}
          onChange={(e) => setData(e)}
          className='rounded-md py-1 px-3 border border-slate-400 focus:ring-4 outline-none focus:border-none'
        >
          <option value='0-3000'>Rs. 0-3000</option>
          <option value='0-500'>Rs. 0-500</option>
          <option value='500-1000'>Rs. 500-1000</option>
          <option value='1000-1500'>Rs. 1000-1500</option>
          <option value='1500-2000'>Rs. 1500-2000</option>
          <option value='2000-2500'>Rs. 2000-2500</option>
          <option value='2500-3000'>Rs. 2500-3000</option>
        </select>
      </div>{" "}
      <div className='border-r border-slate-400  p-3 flex flex-col h-24 w-60'>
        <label htmlFor=''>Property Type</label>
        <select
          name='propertyType'
          onChange={(e) => setData(e)}
          value={filterData.propertyType}
          id=''
          className='rounded-md py-1 px-3 border border-slate-400 focus:ring-4 outline-none focus:border-none'
        >
          <option value='All'>All</option>
          <option value='All house'>House</option>
          <option value='All pg'>PG</option>
          <option value='All farm-house'>Farm-House</option>
          <option value='All villa'>Villa</option>
          <option value='All hotel'>Hotel</option>
          <option value='All oyo'>Oyo</option>
        </select>
      </div>
      <div className='  p-3 flex flex-col h-24 items-center justify-center'>
        <button className='bg-violet-500 py-1 px-3 rounded-md font-medium text-gray-100 hover:bg-violet-700'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
