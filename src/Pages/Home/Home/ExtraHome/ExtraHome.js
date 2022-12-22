import React from 'react';
import Carousel from '../../../../Components/Carousel/Carousel';
import Navbar from '../../../../Components/Shared/Navbar/Navbar';

const ExtraHome = () => {
    return (
        <div className='relative'>
        <Carousel/>
       <div className='absolute z-1 w-full top-0 px-1 py-3'>
       <Navbar/>
       </div>
    </div>
    );
};

export default ExtraHome;