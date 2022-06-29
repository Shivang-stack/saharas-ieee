import React from 'react';
import ideatank from '../public/assets/events/ideatank.jpg';
import Image from 'next/image'
import Link from 'next/link';

const Ideatank = () => {
  return (
    <div id='events' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>      
          <div className='col-span-2 m-left'>
          <p className='uppercase text-xl tracking-widest text-[#faeebe]'>Idea Tank</p>
          <h2 className='py-4'>Overview </h2>
          <p className='py-2 text-gray-300'>IEEE AMCEC presents a platform for Aspiring entrepreneurs to pitch their business models to a panel of investors and persuade them to invest money in their idea.</p>
          <p className='py-2 text-gray-300'>
          An entrepreneur must pitch a potential investor for what the company is worth as well as sell the dream on how much of a profit can be made.          <br/>
          </p>
          <p className='py-2 text-gray-300'>
          This will be a faux miniature version of the famous show “Shark Tank”.
          </p>
          <h3>Coordinators:
          <br/>Sankarshana Hooli - 9901253065
          <br/>Tarun Balaji K S - 8971884421
          </h3>
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSfOliMhKetQiQz-NByw2EFwsMKIUOgX7yU-4VZtAJ5wxozVEQ/viewform'>
            <a>Register</a>
            </Link>
          </button>
          {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={ideatank} alt='/' /> 
        </div>

      </div>
    </div>
  );
};

export default Ideatank;
