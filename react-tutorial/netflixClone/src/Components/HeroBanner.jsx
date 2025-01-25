import React from 'react'
import DropDown from './DropDown'
import EmailForm from './EmailForm'

function HeroBanner() {
  return (
    <div
    className='flex flex-wrap justify-center relative w-full h-screen 
    bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg")]
    bg-cover bg-center text-white'
    >
        {/* Black Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-75'></div>

        {/* Top Content */}
        <div className='relative z-10 text-white p-10 h-20 w-full flex justify-between'>
            {/* Netflix logo */}
            <div className='w-36 h-9 bg-[url("https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=250")]
             bg-cover bg-center'>
            </div>

            <div className='flex gap-5'>
                {/* Drop down component */}
                < DropDown values={['English', 'Hindi']} />
                <button 
                    className='bg-red-600 rounded-md w-20 h-8 hover:bg-red-700 duration-300
                        font-semibold'
                >Sign In</button>
            </div>
        </div>

        {/* Bottom Content */}
        <div className='relative z-10 text-white p-10 w-1/2 flex flex-col text-center justify-center'>
            <h1 className='text-5xl font-extrabold'>Unlimited movies, TV shows and more</h1>
            <p className='mt-4 text-xl font-semibold'>Starts at ₹149. Cancel at any time.</p>
            < EmailForm />
        </div>
    </div>

  )
}

export default HeroBanner