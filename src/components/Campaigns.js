import Slider from "react-slick";
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    ><IoIosArrowForward size={22} /></button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
        <IoIosArrowBack size={22} />
    </button>
  );
}

export default function Campaigns({ campaignDatas }) {

  const [banners, setBanners] = useState([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setBanners(campaignDatas)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive : [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="container mx-auto md:pt-8" >
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider {...settings} className="md:-mx-2">
        {banners && banners.map((banner, index) => (
          <div key={index}>
            <picture className="block md:px-2">
              <img src={banner.image} className="md:rounded-lg" />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
}
