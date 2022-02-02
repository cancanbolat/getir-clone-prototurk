import Slider from "react-slick";
import k from 'react-flags-select'
import { useState } from "react";

export default function HeroSection() {

  const [selected, setSelected] = useState('TR')

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+45',
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="">
      <Slider {...settings} className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white">Dakikalar içinde <br /> kapınızda</h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-100 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
          <div className="flex">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select Language"
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flags-select"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
