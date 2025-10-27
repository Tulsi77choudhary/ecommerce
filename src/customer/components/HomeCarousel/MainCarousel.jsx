import React from "react";
import { MainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const responsive = {
    0: { items: 1 },      
    700: { items: 1 },    
    1024: { items: 1 },   
  };

  const items = MainCarouselData.map((item) => (
    <div
      key={item.id}
      className="relative w-full"
      style={{ aspectRatio: "16/5" }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  return (
    <div className="w-full max-w-full mx-auto">
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls={false}
        autoPlay
        autoPlayInterval={7000}
        infinite
        mouseTracking
      />
    </div>
  );
};

export default MainCarousel;
