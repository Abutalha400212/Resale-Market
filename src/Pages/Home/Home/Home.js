import React from 'react';
import Carousel from '../../../Components/Carousel/Carousel';
import Navbar from '../../../Components/Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div className='relative'>
            <Carousel/>
           <div className='absolute z-1 w-full top-0 '>
           <Navbar/>
           </div>
        </div>
    );
};

export default Home;