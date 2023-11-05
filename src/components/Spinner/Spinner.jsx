import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const Spinner = () => {
    return (
       <div className="flex justify-center">
         <RotatingSquare
        height="100"
        width="100"
        color="#FCD900"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
       </div>
    );
};

export default Spinner;