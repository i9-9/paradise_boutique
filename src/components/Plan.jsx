import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1568402102990-bc541580b59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1534312663388-244b6be22824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1605216663800-d563ef404eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1604545199361-0b929cdb2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1584316273822-7c8d337f6e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />
        </div>
        {/* Right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem similique veniam excepturi dolorum beatae quaerat? Aspernatur aliquam, enim quaerat veniam molestias ad expedita illum, dignissimos fugit, ullam incidunt laborum?</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deserunt ad tempore error. Magnam earum, dolores cum quidem dolore, asperiores hic nostrum corrupti numquam suscipit modi animi non architecto laborum.</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan