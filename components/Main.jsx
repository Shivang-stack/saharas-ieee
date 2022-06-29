import React from 'react';
import Image from 'next/image';
import poster from '../public/assets/Sahasrabg.png';


const Main = () => {
  return (
    <div id='home' className=''>
      <div className=''>     
          <Image
                src={poster}
                alt='/'
                width='3472'
                height='1785'

              />
      </div>
    </div>
  );
};

export default Main;
