import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../App.css'

//images
import  img1  from '../images/carousal-images/img1.jpg'
import  img2  from '../images/carousal-images/img2.jpg'
import  img3  from '../images/carousal-images/img3.jpg'
import  img4  from '../images/carousal-images/img4.jpg'
import  img5  from '../images/carousal-images/img5.jpg'
import  img6  from '../images/carousal-images/img6.jpg'
import  img7  from '../images/carousal-images/img7.jpg'


  const Carousal = () => (
  <Box className='carousal_container'>
    <Carousel infiniteLoop autoPlay showThumbs={false}>

    <div className='image'>
            <img alt="shoe" src={img7}   />
        </div>
        <div className='image'>
            <img alt="shoe" src={img1}   />
        </div>
        <div className='image'>
            <img alt="" src={img3}  />
        </div>
       
        <div className='image'>
            <img alt="" src={img4}  />
        </div>
        <div className='image'>
            <img alt="" src={img5} />
        </div>
        <div className='image'>
            <img alt="" src={img2} />
        </div>
        <div className='image'>
            <img alt="" src={img6} />
        </div>
       
    </Carousel>
    </Box>

  )

  export default Carousal
