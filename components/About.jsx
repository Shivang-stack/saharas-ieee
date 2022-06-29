import React from 'react';
import AmcLogo from '../public/assets/AMCLogo.png';
import IEEELogo from '../public/assets/IEEElogo.png';
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        
        <div className=' flex items-center justify-center p-4 '>
        <Image className='' src={AmcLogo} height='60' width='190' alt='/' />
        </div>
        <div className='col-span-2 m-left'>
        <p className='uppercase text-xl tracking-widest text-[#faeebe]'>About</p>
         <h2 className='py-4'>content here</h2>
         <p className='py-2 text-gray-200'>paras...</p>
         <p className='py-2 text-gray-200'>
         content comes here
         </p>
         <p className='py-2 text-gray-200'>
         content comes here
         </p>
         {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
       </div>
       <div><Image className='' src={IEEELogo}  alt='/' /> </div>
        
      </div>
    </div>
  );
};

export default About;
// <div id='about' className='w-full md:h-screen p-2 flex items-center '>
    //   <div className='col-span-2'>
    //       <p className='uppercase text-xl tracking-widest text-[#faeebe]'>About</p>
    //       <h2 className='py-4'>What&#39;s this fest is all about</h2>
    //       <p className='py-2 text-gray-200'>It&#39;s not your Normal College Fest</p>
    //       <p className='py-2 text-gray-200'>
    //       content comes here
    //       </p>
    //       <p className='py-2 text-gray-200'>
    //       content comes here
    //       </p>
    //       {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
    //     </div>
    //     <div>
          
    //     </div>
    // </div>