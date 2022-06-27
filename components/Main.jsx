import React from 'react';
import Image from 'next/image';
import poster from '../public/assets/poster.png';


const Main = () => {
  return (
    <div id='home' className=''>
      <div className='w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 S'>     
          <Image
                src={poster}
                alt='/'
                width='1100'
                height='675'
              />
      </div>
    </div>
  );
};

export default Main;
