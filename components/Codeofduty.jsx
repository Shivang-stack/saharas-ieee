import React from 'react';
import codeofduty from '../public/assets/events/codeofduty.jpg';
import Image from 'next/image'
import Link from 'next/link';

const Codeofduty = () => {
  return (
    <div id='events' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#faeebe]'>Code of duty</p>
          <h2 className='py-4'>Overview </h2>
          <p className='py-2 text-gray-300'>
          IEEE AMCEC is all set to stimulate & rejuvenate you to come up with a 404-error-free code, this is a call for all the coders out there!
          </p>
          <h3>Coordinators:
          <br/>Tarun Balaji K S - 8971884421
          <br/>Harshitha Reddy -  7349333989
          </h3>
          {/* <br/>
          
          <p className='py-2 text-gray-300'>
          content comes here
          </p> */}
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSco48yYt_GEohhbLi6v9ZY1LUAcwyBXgbtoYa58rxwtgwJVww/viewform'>
            <a>Register</a>
            </Link>
          </button>
          {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={codeofduty} height={1280} width={940} alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default Codeofduty;
