/** @format */

import React, { useContext, useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";
import { LiaBedSolid } from "react-icons/lia";
import { LuDiamond } from "react-icons/lu";
import { PiBathtubLight } from "react-icons/pi";
import { RentContext } from "../RentContext";

function PropertyCard({ data }) {
  const [like, setLike] = useState(false);

  const { likedProperties, setLikedProperties } = useContext(RentContext);
  // console.log(likedProperties);

  useEffect(() => {
    let tm = false;
    likedProperties.map((ele) => {
      if (ele.name == data.name) {
        tm = true;
      }
    });
    setLike((prev) => tm);
    // console.log(like);
  }, [likedProperties,like]);

  const changeLike = () => {
    let temp = [];
    if (like) {
      temp = likedProperties.filter((ele) => {
        if (ele.name !== data.name) return ele;
      });
      setLikedProperties((prev) => temp);
      setLike(false);
    } else {
      let tm = [...likedProperties, data];
      // tm.push(data);
      setLikedProperties((prev) => tm);
      setLike(true);
    }
    // console.log(temp);
  };

  return (
    <div className='propcard border border-slate-400 rounded-lg w-80 overflow-hidden font-medium '>
      <img src={data.image} alt='' className='w-full h-56' />
      <div className='flex items-center justify-between p-2'>
        <h3 className='text-2xl text-blue-600'>₹{data.price}/day</h3>
        <HiHeart
          onClick={() => changeLike()}
          className={`text-3xl ${
            like ? "text-rose-600" : "text-gray-500"
          } hover:text-rose-500`}
        />
      </div>
      <h2 className='text-2xl text-slate-600 px-2'>{data.name}</h2>
      <p className='px-2 text-gray-500'>{data.address}</p>{" "}
      <hr className='m-2' />
      <div className='flex items-center justify-between p-2 text-xl text-slate-500'>
        <div className='flex items-center justify-center gap-1'>
          <LiaBedSolid />
          <span className='text-sm'>
            {data.info.bed > 1
              ? data.info.bed + " Beds"
              : data.info.bed + " Bed"}
          </span>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <PiBathtubLight />
          <span className='text-sm'>
            {data.info.bathrooms > 1
              ? data.info.bathrooms + " Bathrooms"
              : data.info.bathrooms + " Bathroom"}
          </span>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <LuDiamond />
          <span className='text-sm'>{data.info.area}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
