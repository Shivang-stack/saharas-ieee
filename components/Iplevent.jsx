import React from 'react';
import ipl from '../public/assets/events/ipl.jpg';
import Image from 'next/image'
import Link from 'next/link';

const Iplevent = () => {
  return (
    <div id='events' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#faeebe]'>IPL Mock Auction</p>
          <h2 className='py-4'>What&#39;s </h2>
          <p className='py-2 text-gray-300'>It&#39;s not your Normal College Fest</p>
          <p className='py-2 text-gray-300'>
          content comes here
          <br/>
          </p>
          <p className='py-2 text-gray-300'>
          content comes here
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
          </button>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={ipl} height={1280} width={940} alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default Iplevent;
