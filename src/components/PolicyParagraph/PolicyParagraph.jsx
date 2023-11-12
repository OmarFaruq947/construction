import React from 'react';

const PolicyParagraph = ({title,description,index }) => {
    return (
        <div className="max-w-[60%] mx-auto text-justify">

        <div class="title text-xl font-semibold text-gray-500 flex items-center whitespace-nowrap after::content after:bg-gray-500 after:h-px after:w-full after:ml-4 mt-12">
        <span className='text-3xl italic'>{index+1}.</span>{title}
        </div>
        <p className="first-letter:text-3xl first-letter:font-bold  text-gray-400 indent-8 my-5">
       {description}
        </p>
  
      </div>
    );
};

export default PolicyParagraph;