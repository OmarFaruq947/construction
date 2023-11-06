import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceMoreDetails = () => {
    const {id} = useParams()
    // redux use korley eta solve hoye jabe
    return (
        <>
         <p>this service more details show</p> 
         <h1>service: {id}</h1>  
        </>
    );
};

export default ServiceMoreDetails;