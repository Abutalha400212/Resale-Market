import React from 'react';
import caro1 from '../../assest/Image/caro-1.webp'
import caro2 from '../../assest/Image/caro-2.webp'
import caro3 from '../../assest/Image/caro-3.jpg'
import './Carosel.css'
const Carousel = () => {
    return (
       
<div className="carousel w-full h-screen">
  <div id="slide1" className="carousel-item relative w-full carousel-img">
    <img src={caro1} className="w-full bg-center object-cover" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle ml-3">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={caro2} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={caro3} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

    );
};

export default Carousel;