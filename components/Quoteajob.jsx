import React from 'react';
import quoteajob from '../public/assets/events/quoteajob.jpg';
import Image from 'next/image'
import Link from 'next/link';

const Quoteajob = () => {
  return (
    <div id='events' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        
        <div className='col-span-2 m-left'>
          <p className='uppercase text-xl tracking-widest text-[#faeebe]'>Quote A Job</p>
          <h2 className='py-4'>Overview </h2>
          <p className='py-2 text-gray-300'></p>
          <p className='py-2 text-gray-300'>
          IEEE AMCEC has come up with a great awe-inspiring opportunity for You! 
          </p>
          <p className='py-2 text-gray-300'>
          To Unlock your talent, Enhance your potential and build your Developmental skills by taking part in our Mock Interview and enhance your chances of getting hired.
          </p>
          <h3>Coordinators:
          <br/>Dipika Ray - 6366109327
          <br/>Samuel Joseph - 6361581016
          <br/>Pranali P - 9480923983
          </h3>
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLScb5HdofIh5l1yJ-M85nVzsPeaUdB4P6eEoNm4wnnqNXiM3IA/viewform?usp=sf_link'>
            <a>Register</a>
            </Link>
          </button>
          {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={quoteajob} alt='/' /> 
        </div>
       
      </div>
    </div>
  );
};

export default Quoteajob;
