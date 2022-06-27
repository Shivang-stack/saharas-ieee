import Image from 'next/image';
import React from 'react';
import onstageImg from '../public/assets/projects/onstage.jpg';
import Link from 'next/link';

const codeofduty = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={onstageImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>On Stage Events</h2>
          <h3>Here are Some details</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
      <div className='col-span-4'>
          <h2>Solo Dance</h2>
          <h4>Details</h4>
          <p>
          
          Faculty Coordinators:<br/>
          Ganesh (civil) <br/>
          Shilpa Acharya(EEE)<br/>
          Chandraprabha(ECE) <br/>
          Student Coordinator:<br/>
          Smitha : 9663917442 <br/>
          Tammana : 6376574386<br/>
          Vishal: 8904686659
          </p>
          <h4>Date  : 1st July 2022 </h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/7TiAUTs1u2rVUYnU9'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>
      
        <div className='col-span-4'>
          <h2>Group Dance</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators:<br/>
          Ganesh (civil) <br/>
          Shilpa Acharya(EEE)<br/>
          Chandraprabha(ECE) <br/>
          Student Coordinator:<br/>
          Smitha : 9663917442 <br/>
          Tammana : 6376574386<br/>
          Vishal: 8904686659
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/z8ab8CFLze24APUdA'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Dance Battle</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators:<br/>
          Ganesh (civil) <br/>
          Chandraprabha(ECE) <br/>
          Student Coordinator:<br/>
          Smitha : 9663917442 <br/>
          Tammana : 6376574386<br/>
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSel2qmEL9hGHSaj1hCoaRjBb0qG__HBV3pettS0zcbuF2CcwA/viewform'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Solo Singing</h2>
          <h4>Details</h4>
          <p>
            Faculty Coordinators:<br/>
            Shilpa RM (EEE)<br/>
            Dr Usha Ravi (EC) <br/>
            Student Coordinator:<br/>
            Sankarshana Hooli:9901253065<br/> 
            Dhanusha:9620875845
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/338EK8sAQfgye4nf8'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Group Singing</h2>
          <h4>Details</h4>
          <p>
            Faculty Coordinators:<br/>
            Shilpa RM (EEE)<br/>
            Ashwini(Chem)<br/> 
            Student Coordinator:<br/>
            Sankarshana Hooli:9901253065<br/> 
            Dhanusha:9620875845
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSeBgY9UL1bqRRM0qIMQTM5Z8QvKxcsVQi1KipppJ7sQvC3ifw/viewform'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Mad Ads</h2>
          <h4>Details</h4>
          <p>
          Faulty Coordinators <br/>
          Geetha(ME)<br/>
          Tanuja(MBA)<br/>
          Student Coordinators:<br/>
          Keerthi:7259970624<br/>
          Madhura:9113818484<br/>
          </p>
          <h4>Date  : 1st July 2022 </h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/ZUKr9JdjnEuJxGWz5'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Fashion Show</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators:<br/>
          Mushtaq Ahmed (CSE) <br/>
          Student Coordinators:<br/>
          Monisha : 9535747779 <br/>
          Sakshee : 7430040816 <br/>
          Olivia Roy : 9019196528
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSfg_xK6BEVCGWrTeYA-Iuo7-RmnNYxLTH-BkkJxUsAYVGnFvw/viewform'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Standup Comedy</h2>
          <h4>Details</h4>
          <p>
            Faculty Coordinators:<br/>
            Moiyuddin-(civ) <br/>
            Sivanand-(ISE) <br/>
            Jhanvi-(ECE)<br/>
          Student Coordinators:<br/>
          Md Ameem: 9739318689<br/>
          Pawan: 7337719048<br/>
          Shubham: 9798890276
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSeIKRq9_BfG8T6LcvGLwR3V6-p1fh9NRiUHrZqF--8qZT7qUg/viewform'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Beat Boxing</h2>
          <h4>Details</h4>
          <p>
          TEACHER COORDINATOR:<br/>
          Dr Saravanan (ME)<br/>
          Victor (ECE)<br/>
          STUDENT COORDINATOR :<br/>
          Vikas   :6360545450<br/>
          Thimmesh:6363666654  <br/>
          Sachin  :7424959849
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSeMeRb_5K_hWaPUYtmCHmM0vobJRKwZsBFT_K7W3_rr7jRVBg/viewform'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Drama Skit</h2>
          <h4>Details</h4>
          <p>
          Event Co-ordinators:<br/> 
          Smriti  : 9264945236 <br/>
          Karthik : 6361909110 <br/> 

          Faulty Co-ordinators: 
          Sneha(Maths Department)<br/> 
          Manjula(Maths Department)<br/> 
          Maithili(Civil Department)
          </p>
          <h4>Date  : 1st July 2022</h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLScnCQTMrvER6wd3ab7-ciWC41XJiRbT57nriqykIOZ69RTM6Q/viewform?vc=0&c=0&w=1&flr=0'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>
{/* 
        <div className='col-span-4'>
          <p>Dj Night</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div> */}

        
        <Link href='/#registrations'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default codeofduty;
