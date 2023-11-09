import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductPrice = () => {
  const navigate = useNavigate()
    const handleOrderConfirm=(e)=>{
        e.preventDefault()
        console.log('clicked');
        toast.success('Order Accepted 🎁')
        navigate('/checkout')

    }
    return (
        <>
            <div className="mt-3 rounded-md bg-white border border-brand flex justify-between">

            <div className="">
              <p className="">Total Price :</p>
              <p className="">Total Discount :</p>
              <p className="">Total Vat :</p>
              <hr />
              <p className='text-secondary font-bold'>Total Cost :</p>
              
            </div>

            <div className="">
              <p className="">$1299.99</p>
              <p className="">$12.99</p>
              <p className="">$1391.99</p>
              <hr />
              <p className='text-brand font-bold'>$13925</p>
            </div>
          </div>
        
         
          
          <button className="btn  btn-active bg-brand text-white pt-4 mt-5" onClick={handleOrderConfirm}>Confirm order</button>
         
            

        </>
    );
};

export default ProductPrice;