import React from "react";
import Slider from "react-slick";
import carouselData from "../Projects.json";

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoPlay: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full text-[#BDEBEA]">
      <Slider {...settings}>
        {carouselData.slides.map((slide, index) => {
          if (slide.image) {
            const isVideo = slide.image.includes(".mp4");
            return (
              <div key={index} className="bg-[#222525] h-[800px]">
                <div className="w-full">
                  {isVideo ? (
                    <video
                    src={require(`../assets/${slide.image}`)}
                      alt={slide.alt}
                      className="w-full"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={require(`../assets/${slide.image}`)}
                      alt={slide.alt}
                      className="w-full"
                    />
                  )}
                </div>
                <div className="px-4 py-4">
                  <h3 className="text-left text-xl font-bold my-2">
                    {slide.title}
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 my-2">
                    {slide.tags &&
                      slide.tags.map((tag, tagIndex) => (
                        <a
                          key={tagIndex}
                          className=" text-[#252728] font-semibold rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] pointer-events-none w-auto h-7  px-3 flex items-center justify-center my-1"
                          href="/About"
                        >
                          {tag}
                        </a>
                      ))}
                  </div>
                  <p>{slide.description}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <h3 className="text-2xl sm:text-4xl text-center font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold">
                  {slide.title}
                </h3>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
