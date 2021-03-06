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
         <h2 className='py-4'>SYMPOSIUM</h2>
         <p className='py-2 text-gray-200'>
          IEEE Students Technology Symposium is an 
          annual event that is conducted by every IEEE 
          student branch. This version of our 
          symposium hosts professionally managed 
          events consisting of oral and poster 
          sessions showcasing original contributions 
          from students and young professionals. 
          Through this event, our student branch 
          plans on achieving the goal to reach out to 
          all the students who can use their creative 
          and innovative minds in using the 
          technology for the betterment of humanity.
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