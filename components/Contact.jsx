import Link from 'next/link';
import React from 'react';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#faeebe]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <h2 className='py-2'>Connect to our Coordinators</h2>
                <p>Checkout out our <Link href='https://www.instagram.com/ieee_amcec'><a><strong>Instagram</strong></a></Link></p>
                <p className='py-4'>
                  Feel free to reach out to us
                </p>
                <p>
                Student Coordinators:
                </p>
                <p>Harshitha Reddy - 7349333989 </p>
              </div>
          
            </div>
          </div>

          {/* right */}
          
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#faeebe]' size={30} />
                </div>
            </Link>
        </div>
        <div className='flex justify-center py-12 text-[#faeebe]'>
          
        <a href='https://portfolio-nextjs-swart-kappa.vercel.app/'> &copy; Created by Shivang Yadav (CSE)</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
