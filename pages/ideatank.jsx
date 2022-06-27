import Image from 'next/image';
import React from 'react';
import offstageImg from '../public/assets/projects/offstage.jpeg';
import Link from 'next/link';

const ideaTank = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={offstageImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Off Stage Events</h2>
          <h3>Here are Some details</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>

      <div className='col-span-4'>
          <h2>E-Gaming</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators:<br/>
          Dr. S Rabindranath <br/>
          Mr. Ravitej<br/>
          Mr. Anand<br/>

          Student Coordinators:<br/>
          Sudeep - 9071033355<br/>
          Suhaas - 9738344796
          </p>
          <h4>Date  : 30th June 2022 </h4>
          <h4>Venue : Online</h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/xJbJ8Rm7GLwGLVU57'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4 '>
          <h2>Debate</h2>
          <h5>Details</h5>
          <p>
            FACULTY COORDINATORS<br/>
            PAVITHRA(ISE)<br/> 
            SHETHAL(CIV)<br/>
            ASHWINI<br/>

            STUDENT COORDINATORS<br/>
            CHANDRACHUDA HOSAHALLI :-9632439632
          </p>
          <h4>Date  : 30th June 2022</h4>
          
          <h4>Venue :  Civil dept Seminar Hall</h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSftBk-VyFOgxvA15rVSoBGnvkC6NyWc0bvVwW-baf37DEpvRw/viewform?usp=sf_link'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Ramp Walk</h2>
          <h4>Details</h4>
          <p>
          TEACHER COORDINATORS:<br/>  
          Mushtaq Ahmed(CSE)<br/>
          Roopa (Physics)<br/>
          Veeranna (Chem)<br/>

          STUDENT COORDINATORS: <br/>
          Tammana: 6376574386<br/>
          Akshaya KR: 9742336057
          </p>
          <h4>Date  : 30th June 2022</h4>
          
          <h4>Venue : Infront of Staircase </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/xJYGTcnPUiEgwQgq9'>
            <a>Register</a>
            </Link>
            </button>
        </div>

        <div className='col-span-4'>
          <h2>Mobile Photography</h2>
          <h4>Details</h4>
          <p>
          Faculty coordinators :<br/>
          Pallavi<br/>
          Nethravali<br/>

          Student coordinator :<br/>
          Prajwal - 8884734459
          </p>
          <h4>Date  : 30th June 2022</h4>
          
          <h4>Venue :  Edusat room (222) </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/oi1wmEQ9jb1rH1Sj6'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Beg, Borrow and Steal</h2>
          <h4>Details</h4>
          <p>
          Teacher Coordinators:<br/>
          Sivalingaswamy (EEE)<br/>
          Sajeeran (CSE)<br/>
          Seema (CSE)<br/>

          Student Coordinators:<br/>
          Swati Priya :6201299899
          </p>
          <h4>Date  : 1st July 2022</h4>
          <h4>Venue :  Campus</h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/s5uUCMSY1wh3FpzTA'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Treasure Hunt</h2>
          <h4>Details</h4>
          <p>
          TEACHER COORDINATORS:<br/>  
          BARNALI MAAM (MBA dept)<br/>
          RACHANA MAAM (ISE dept)<br/>
          STUDENT COORDINATORS: <br/>
          TANIYA RUKHSAR :8088260539<br/>
          Pratiksha	K	:9731280659
          </p>
          <h4>Date  : 1st July 2022 </h4>
          <h4>Venue :  Campus</h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Registeration closed</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Painting, Sketching Or Art</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators<br/>
          Padma Priya Mam (MBA)<br/>
          Aruna Mam (MBA)<br/>
          Mitha Mam (ISE)<br/>
          Jayashree Mam (ECE)<br/>

          Student Coordinator<br/>
          Jayanth.U - 7349695579
          </p>
          <h4>Date  :  30thth June 2022 </h4>
          <h4>Venue : ISE SEMINAR HALL </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSeLrVo070BstQ8fHcNMd9KWpG3a8YtiR1QJz9867J1KW1YPnw/viewform?usp=sf_link'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Minute to Win</h2>
          <h4>Details</h4>
          <p>
            60 second challenge that includes exciting games with the objects around.<br/>
            Teacher Coordinator:<br/>
            Arun Kumar(Civ)<br/>
            Amulya(ECE)<br/>
            Rajashree(ISE)<br/>
            
            Student coordinator:<br/>
            Shoaib :9606227983<br/>
            Ujjval :8493875523

          </p>
          <h4>Date  : 30th June 2022</h4>
          <h4>Venue : Room 221 </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/e/1FAIpQLSdmE_kKtpF96PHKl_P7qWZ98U2yC5ARYzX1PiGMXtPbROUFqA/viewform?usp=sf_link'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Know it or Blow it</h2>
          <h4>Details</h4>
          <p>
            Teacher Coordinator:<br/>
            Nischitha(Civil)<br/>
            Ramya(CSE)<br/>
            Mala(CSE)<br/>
            Student coordinator:<br/>
            Olivia Roy:9019196528

          </p>
          <h4>Date  : 30th June 2022</h4>
          <h4>Venue : Edusat Room (222) </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/K6E5p1cZqDandKANA'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Poetry</h2>
          <h4>Details</h4>
          <p>
          Faculty Coordinators:<br/>
          Renny (Civ)<br/>
          Navya (ISE)<br/>
          Senbagavalli (ECE)<br/>

          Student Coordinators:<br/>
          Kusuma S - 9353733517<br/>
          Meghana R - 8310445875
          </p>
          <h4>Date  : 30th June 2022</h4>
          
          <h4>Venue : Room 314 </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://docs.google.com/forms/d/1JX0d9nFXdG-nq9ZVL9rN5Oy9p0nmDvcwiscAcAdjbTM/edit'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Short Film</h2>
          <h4>Details</h4>
          <p>
          FACULTY CO ORDINATORS :-<br/>
          RAKESH (ME)<br/>
          MANJUNATH (ME)<br/>
          STUDENT CO ORDINATORS:-<br/>
          HARSHAVARDHAN P : 9632424030<br/>
          ROHITH : 8197327234
          </p>
          <h4>Date  : 1st July 2022</h4>
          <h4>Venue : EDUSAT ROOM (ROOM NO 222) MAIN BLOCK</h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/YdmJSWW8WQyh8g7F7'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>


        <Link href='/#registrations'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ideaTank;
