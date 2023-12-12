import React from 'react'



const SelectElement = ({text, children}) => {
  return (
    <div className='flex text-white items-center border-gray-500 border border-1 py-2 pr-8 pl-1 gap-x-1'>
        { children }
        <p>{ text }</p>
    </div>
  )
}

export default SelectElement