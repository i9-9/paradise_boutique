import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80' alt='guadalupe mexico resort' />
        {/* Overlay */}
        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            {/* Text */}
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All inclusive</p>
                <h1 className='text-5xl font-bold md:text-7xl drop-shadow-2xl'>Find yourself in the middle of the desert</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis laudantium saepe veritatis numquam non nesciunt alias dolor deleniti vel repellendus, praesentium enim repellat ex cum quae asperiores aspernatur harum.
                </p>
                <button className='bg-white text-black'>
                    Reserve now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero