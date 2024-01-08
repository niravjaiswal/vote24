import React from 'react';
import './globals.css';
import Image from './voteimage.png';

function Hero() {
  return (

    <section className="bg-primary">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start justify-center">
        <div className="max-w-screen-xl px-10 sm:flex sm:h-screen py-4 sm:items-center">
          <div className="relative max-w-3xl text-left ">
            <div class="h-3 w-10 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 mb-2"></div>
            <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 whitespace-nowrap">MAKING</h2>
            <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 whitespace-nowrap">VOTING</h2>

            <h1 class="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent">
              SIMPLE
            </h1>


            <div class="h-3 w-10 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 mt-2"></div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:flex sm:h-screen sm:items-center">
          {/* Apply 'hidden' class to make the image disappear on small devices */}
          <img src={Image} className=" rounded-[16px]" />
        </div>
      </div>
    </section>
  )
}

export default Hero