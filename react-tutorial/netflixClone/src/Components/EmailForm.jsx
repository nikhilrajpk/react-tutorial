import React from 'react'
import { useState } from 'react'
import useEmail from '../Contexts/EmailContext'

function EmailForm() {
    const {email, emailHandler} = useEmail()

    const [emailText, setEmailText] = useState('')
    const [isEmailEmpty, setisEmailEmpty] = useState(false)
    const emailSubmit = (e) =>{
        e.preventDefault()
        if(emailText.trim()===''){
            setisEmailEmpty(true)
            return
        }
        emailHandler(emailText)

        alert(`Thankyou ${emailText}`)
        setEmailText('')
        setisEmailEmpty(false)
    }
  return (
    <div className='flex flex-wrap gap-y-3 m-3'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {/* Email form */}
        <form 
        className="flex gap-4 relative w-full max-w-lg items-center" 
        onSubmit={emailSubmit}
        >
        {/* Input Field */}
        <div className="relative w-full">
            <input
            type="email"
            id="email"
            placeholder=" "
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            className="w-full h-16 bg-transparent border border-red-600 rounded-md outline-none p-3 pt-5 text-lg peer"
            />
            <label
            htmlFor="email"
            className="absolute left-3 top-4 text-gray-400 text-sm transition-all 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                        peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-600"
            >
            Email address
            </label>
        </div>

        {/* Button */}
        <button
            type="submit"
            className="inline-block bg-red-600 hover:bg-red-700 px-1 py-2 rounded-md duration-300 
                    text-white font-bold text-lg sm:text-xl leading-none w-48 h-16"
        >
            Get Started &gt;
        </button>
        </form>

        {
            isEmailEmpty ? <p className='text-red-600'>⭕Email is required</p> : ""
        }

    </div>
  )
}

export default React.memo(EmailForm)