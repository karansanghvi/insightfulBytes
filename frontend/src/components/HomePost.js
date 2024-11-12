import React from 'react';
import {IF} from '../url'

function HomePost({ post }) {
  return (
    <div className='w-full flex flex-col md:flex-row mt-8 space-x-0 md:space-x-6'>
      {/* left */}
      <div className='w-full md:w-[35%] h-[200px] flex justify-center items-center'>
        <img
          src={IF+post.photo}
          alt=''
          className='h-full w-full object-cover rounded-md'
        />
      </div>

      {/* right */}
      <div className='flex flex-col w-full md:w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          {post.title}
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4 items-center justify-between'>
          <p>{post.username}</p>
          <div className='flex space-x-2'>
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>
          {post.desc.slice(0,200)+"...Read More"}
        </p>
      </div>
    </div>
  );
}

export default HomePost;
