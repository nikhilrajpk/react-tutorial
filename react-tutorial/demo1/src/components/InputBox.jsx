import React from 'react'

function InputBox({type, name, placeholder, handleData}) {
  return (
    <>
        <input type={type} name={name} placeholder={placeholder}
            onChange={(e)=> handleData(e)} />
    </>
  )
}

export default InputBox