import React from 'react';

const Ribbon = ({ text }) => {
  return (
    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white font-bold uppercase text-xs py-1 px-2 rotate-45 z-10">
      {text}
    </div>
  );
};

export default Ribbon;
