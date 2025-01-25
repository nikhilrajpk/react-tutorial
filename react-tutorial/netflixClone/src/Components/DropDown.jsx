import React from 'react'

function DropDown({values}) {
  return (
    <div>
        <select className='bg-transparent border border-white rounded-md outline-1 h-8 w-24'>
            {
                values.map((value)=>(
                    <option key={value} value={value}
                    className='text-black hover:text-white'
                    >{value}</option>
                ))
            }
        </select>
    </div>
  )
}

export default React.memo(DropDown)