import React, { useState } from 'react';
import Navbar from './Header/Navbar';
import SearchPage from '../SearchPage/SearchPage';
import './Homepage.css'

import Heading from './Header/Heading';
import Landingpage from './Landingpage';
import SubscriptionPlans from './SubscriptionPlans ';
import ghost from '../Assets/Ghost.png'
import { IoBagHandleOutline } from "react-icons/io5";
import ProgressBar from './ProgressBar';

import DomainSection from './DomainSection';
import SkinSection from './SkinSelection';
import SliderNavbar from './SliderNavbar';

function HomePage() {

    const [navbarImage, setnavbarImage] = useState(false);
    const viewportHeight = window.innerHeight;
    window.addEventListener('scroll', function () {
        const scrollableDiv = document.getElementById('scrollableDiv');
        const distanceFromTop = scrollableDiv.getBoundingClientRect().top;

        console.log("distancefromtop:", distanceFromTop, ", viewportHeight: 85 ", viewportHeight)
        if (distanceFromTop <= 100) {
            scrollableDiv.classList.add('overflow-scroll', 'sticky');
            //   scrollableDiv.style.top = `0px`;
        } else {
            scrollableDiv.classList.remove('overflow-scroll', 'sticky');
            //   scrollableDiv.style.top = '';
        }
    });

    return (

        <div className="flex flex-col font-Poppins relative h-full">
            <Navbar navbarImage={navbarImage} setnavbarImage={setnavbarImage}></Navbar>

            {/* <Heading setNavbarImage={setnavbarImage} /> */}
            <div className='relative flex justify-center -mb-16 z-50'>
                {/* <img src={ghost} className='-mt-[50px] h-[80px] absolute -z-10 h-40' /> */}
                <div className='-mt-[37px] h-[77vh] absolute -z-10 h-40'>
                    <svg height="80" viewBox="0 0 192 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M191.977 60C191.996 59.4258 192.006 58.8499 192.006 58.2724C165.852 58.2724 155.128 43.766 144.382 29.2289C133.589 14.63 122.774 0 96.286 0C69.1176 0 57.0831 15.3909 45.3837 30.3531C34.3184 44.5044 23.5529 58.2724 0.566406 58.2724C0.566406 58.8499 0.576045 59.4258 0.595213 60H191.977Z" fill="white" />
                    </svg>

                </div>
                <div>
                    <div className=' w-[110px] h-[110px] bg-orange-500 -mt-[30px] border border-8 border-white rounded-full flex flex-col items-center justify-center text-center font-bold text-white'>
                        <IoBagHandleOutline className='text-3xl mb-2' />
                        <p className='text-sm font-semibold'>Build</p>
                    </div>
                </div>

            </div>
            <div className='bg-white h-4 w-full mt-6 z-10'></div>
            <div id='scrollableDiv' className={` h-[77vh] xl:h-[120vh] 2xl:h-[120vh] bg-white pt-16 relative bg-black`}>
                <Landingpage />
            </div>
            <div className=' md:mt-0'>
                <SkinSection />
            </div>

            <DomainSection />
            <SubscriptionPlans></SubscriptionPlans>
            <div className=' mt-[850px] md:mt-0'>
                <SliderNavbar></SliderNavbar>
                <ProgressBar></ProgressBar>
            </div>

        </div>


    );
}

export default HomePage;





{/* <div className="">
          
          <div className='sticky top-0 h-[30px] bg-blue-500 navbar'>Navbar</div>
          <div className='h-[90vh] overflow-scroll'>
              <div className=''>
                  <div className='h-screen bg-red-400'>Hello</div>
             
                  <div className='h-[3000px] bg-green-400 w-screen'></div>
              <div className='h-10 bg-gray-500 w-screen'></div>
              <div className='h-10 bg-gray-500 w-screen'></div> 
              </div>
          </div>
        
          <div className='h-screen bg-slate-200'>Another Section</div>
      </div> */}