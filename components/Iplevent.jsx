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
          <h2 className='py-4'>Overview </h2>
          <p className='py-2 text-gray-300'>Registration for IPL MOCK AUCTION</p>
          <p className='py-2 text-gray-300'>
          IEEE AMCEC is here to create a platform for the young minds and investors to showcase their creative and smart minds for an IPL MOCK AUCTION. This is a fun-technical event to encounter a hypothetical IPL AUCTION.
          </p>
          <h3>Coordinators:
          <br/>Smitha S - 96639 17442
          <br/>Shashank G - 83105 66629
          </h3>
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSeb2ggobE1O2ZRIbU9lw2YWBZXlWhahVLOd61RRh3PZP5_Z5g/viewform'>
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
