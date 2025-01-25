import React from 'react'

function TrendingNow() {
  return (
    <div>
        <div className="relative w-full h-64 bg-black flex flex-wrap">
            {/* Curved Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600 via-red-700 to-black clip-custom-curve"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">Trending Now</h1>
            </div>
        </div>
    </div>
  )
}

export default TrendingNow