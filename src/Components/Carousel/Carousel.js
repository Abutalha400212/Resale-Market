import React from 'react';
import caro1 from '../../assest/Image/caro-1.webp'
import caro2 from '../../assest/Image/caro-2.webp'
import caro3 from '../../assest/Image/caro-3.jpg'
import './Carosel.css'
const Carousel = () => {
    return (
       
<div class="carousel w-full h-screen">
  <div id="slide1" class="carousel-item relative w-full carousel-img">
    <img src={caro1} class="w-full bg-center object-cover" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle ml-3">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={caro2} class="w-full" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={caro3} class="w-full" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

    );
};

export default Carousel;