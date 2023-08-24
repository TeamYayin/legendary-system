import React from 'react';
import './BookingFormTable.css';

const Column = ({ available }) => {
  console.log(available);
  return (
    <div>
      {available ? (
        <div className="w-full h-[90px] flex justify-center items-center bg-green-400 m-0 p-0 text-white">
          <td className="text-white text-xl">Available</td>
        </div>
      ) : (
        <div className="w-full h-[90px] flex justify-center items-center bg-red-400 m-0 p-0 text-white">
          <td className="text-white text-xl">Booked</td>
        </div>
      )}
    </div>
  );
};

export default Column;
