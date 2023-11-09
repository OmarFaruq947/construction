import { Icon } from '@iconify/react';
import React from "react";
import product1 from '../../assets/Shop-img/tools1.jpg';
import RatingStar from "../../components/Rating/RatingStar";
const ShopDetailsCard = () => {
  return (
    <>
      <div className="w-full bg-white p-2 rounded-md mb-1.5">
        <div className="">
          <img src={product1} alt="..."  className="w-10 h-10 rounded-md"/>
        </div>
        
        <div className="">
          <p className='font-semibold text-secondary'>hi ami construction tools tolls</p>
          <div className="flex justify-between">

          <p className="text-secondary font-bold">100$</p>
          <RatingStar rating={4} starSize={12}/>
          </div>


        </div>
         <Icon icon="material-symbols:delete-outline" className="-mt-9 -mr-3 bg-red-200 rounded-full p-1 w-6 h-6 text-red-700 cursor-pointer "/>
        
       
      </div>
      
    </>
  );
};

export default ShopDetailsCard;
