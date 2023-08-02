import React from 'react';
import Slider from 'react-slick';
import Home from '../assets/Home.jpg';
import crypto from '../assets/crypto.png';

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [       
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
      }
    ]
      
      
  };

  return (
    <div className="w-full text-[#BDEBEA] ">
      
      <Slider {...settings}>
        <div className='bg-[#222525] w-[522px]'> 
          <img src={Home} alt="home" className='w-full' height='200px' />
          <div className='px-8'>
          <h3 className="text-left text-xl font-bold mt-2">Trip Planner Web app </h3>
          <div className='flex flex-row flex-wrap gap-2 '>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7  px-3 flex items-center justify-center my-1' href='/About'>REACT</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-1' href='/About'>TAILWIND</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-1' href='/About'>API</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-1' href='/About'>FIGMA</a>

            </div>
          <p>
            
            In this project, I took on the role of a front-end developer, where I was responsible for several key aspects. My tasks began with creating the project's design on Figma, which laid the foundation for the visual aspects of the project. I then utilized Tailwind CSS and React JS to bring this design to life, creating a responsive user interface that ensured a seamless user experience across various devices.
            <br></br>
            <br></br>
            One of my significant responsibilities was to bridge the gap between the front-end and back-end systems. This involved implementing authentication protocols and handling various HTTP methods, which was crucial for the smooth functioning of the project.
            <br></br>
            <br></br>
            This project served as an excellent platform for me to deepen my skills in React and Tailwind CSS. More importantly, it provided me with a comprehensive understanding of full-stack development, as I was actively involved in both front-end and back-end integrations. The experience I gained from this project has been invaluable, and it has significantly enhanced my capabilities as a full-stack developer.
          </p>
          </div>
        </div>
        <div className='bg-[#222525] w-auto ml-4'>
        <img src={crypto} alt="project1" className='w-full' height='320px' />
          <div className='px-4'>
            <h3 className="text-left text-xl font-bold mt-2">TITLE PROJECT</h3>
            <div className='flex flex-row flex-wrap gap-4'>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7  px-3 flex items-center justify-center my-2' href='/About'>REACT</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-2' href='/About'>TAILWIND</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-2' href='/About'>API</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-2' href='/About'>EXPRESS</a>
            <a className=' text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7 px-3 flex items-center justify-center my-2' href='/About'>FIGMA</a>
            </div>
            <p>
              In this project, I was tasked with developing a complete web platform centered around cryptocurrencies. The platform was designed to manage display settings, articles, and user connections, providing a comprehensive solution for cryptocurrency enthusiasts.
              <br></br>
              <br></br>
              my primary responsibility was to develop the news API. This involved fetching data from an external API and implementing a feature that allowed users to receive news based on specific keywords. In addition to this, I contributed to the design process by assisting with the creation of the Figma design and took part in the front-end development of the project.
              <br></br>
              <br></br>
              The project also involved the creation of schemas and routes, and the management of cryptocurrency data. This project allowed me to gain hands-on experience with DevOps practices, including image storage and function-app development.
              <br></br>
              <br></br>
              Overall, this project was a significant step in my journey as a full-stack developer, providing me with the opportunity to work on a wide range of tasks and deepen my understanding of web platform development, particularly in the realm of cryptocurrencies.</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl sm:text-4xl text-center font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold">Coming soon ...</h3>
        </div>
        <div>
          <h3 className="text-2xl sm:text-4xl text-center font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold">Coming soon ...</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
