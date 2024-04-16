import React from "react";

type Props = {
    children: React.ReactNode;
    }

export default function Error({children}:Props) {
  return (
   
    <div className='bg-red-100 border m-5 border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
      <strong className='font-bold'>Error!</strong>
      <span className='block sm:inline'>{children}</span>
    </div>


  )
}
