import React from 'react'

function InputField({type, placeholder, name, handleChange, showPassword}) {
    console.log('render input field')
    const onHandle = (e) => {
        handleChange(e)
    }
  return (
    <>
        <input type={showPassword ? 'text' : type} placeholder={placeholder} 
            name = {name}
            onChange={(e) => onHandle(e)}
        />
    </>
  )
}

export default React.memo(InputField)