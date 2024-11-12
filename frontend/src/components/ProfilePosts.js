import React from 'react'

function ProfilePosts() {
  return (
    <>
      <div className='w-full flex flex-col md:flex-row mt-8 space-x-0 md:space-x-6'>
      {/* left */}
      <div className='w-full md:w-[35%] h-[200px] flex justify-center items-center'>
        <img
          src='https://www.analyticsinsight.net/wp-content/webp-express/webp-images/uploads/2021/12/Top-10-real-life-applications-of-artificial-intelligence.jpg.webp'
          alt=''
          className='h-full w-full object-cover'
        />
      </div>

      {/* right */}
      <div className='flex flex-col w-full md:w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          10 Uses Of Artificial Intelligence In Day To Day Life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4 items-center justify-between'>
          <p>@karansanghvi</p>
          <div className='flex space-x-2'>
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor risus enim, sit amet euismod risus maximus ut. Donec
          bibendum egestas sem eget iaculis. Proin vel urna pellentesque,
          commodo neque ut, aliquet nunc. Suspendisse potenti. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc nec libero
          efficitur, malesuada ex eget, elementum lectus. Sed porta venenatis
          sem.
        </p>
      </div>
    </div>
    </>
  )
}

export default ProfilePosts
