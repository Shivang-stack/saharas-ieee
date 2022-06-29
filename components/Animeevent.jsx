import React from 'react';
import animemania from '../public/assets/events/animemania.jpg';
import Image from 'next/image'
import Link from 'next/link';

const Animeevent = () => {
  return (
    <div id='events' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#faeebe]'>Anime Mania</p>
          <h2 className='py-4'>Overview </h2>
          <p className='py-2 text-gray-300'>&ldquo;TSUYO NARERU RIYUU WO SHITTA BOKU WO TSURETE SUSUME....&ldquo;</p>
          <p className='py-2 text-gray-300'>
          Guess where it&apos;s From?
          <br/>
          Craving for more?
          </p>
          <p className='py-2 text-gray-300'>
          Relive Your Anime moments
          </p>
          <h3>Coordinators:
          <br/>Jessy - 7899412171
          <br/>Shariq - 7619114753
          </h3>
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
          </button>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={animemania} height={1280} width={940} alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default Animeevent;
