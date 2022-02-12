import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useWindowWidth } from '@react-hook/window-size'
import LogInButton from "./ui/form/LogInButton";
import SignInButton from "./ui/form/SignInButton";
import axios from "axios";
import { BASE_API_URL } from "constants/constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/auth";

export default function HeroSection() {

  //login or register form
  const [isUser, setIsUser] = useState(false)

  //windowWidth for responsive components
  const windowWidth = useWindowWidth();

  //state (redux) auth
  const history = useHistory();
  const dispatch = useDispatch();

  //react-slick (slider) settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear'
  };

  //login or register form toggle
  const toggleUserForm = () => {
    setIsUser(!isUser)
  }

  //user form values
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  //user form method
  const onInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  //form submit method
  const onFormSubmit = (event) => {
    event.preventDefault();

    if (isUser) {
      //login
      axios.post(BASE_API_URL + 'users/login', {
        email: user.email,
        password: user.password
      }).then((response) => {
        //set state
        dispatch(login(response.data))
        console.log(response.data);
        //router push home page for all products (redirect profile page for now)
        history.push('/profile')
      })
    } else {
      //signin
      axios.post(BASE_API_URL + 'users/register', {
        userName: (user.firstName.toLocaleLowerCase() + user.lastName.toLocaleLowerCase()).trim(),
        email: user.email,
        password: user.password
      }).then((response) => {
        console.log(response.data);
        //set data to localStorage 
        //router push home page for all products
      })
    }
  }


  return (
    <div className="">
      {windowWidth >= 768 &&
        <Slider {...settings} className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
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
        </Slider>}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 -translate-x-0 
        md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white">Dakikalar içinde <br /> kapınızda</h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-100 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
            {/* Inputs */}
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2">
                {/* FirstName */}
                <label className={`${isUser ? 'hidden' : ''}  flex-1 relative group block cursor-pointer`}>
                  <input value={user.firstName} onChange={onInputChange} name="firstName" required type="text" className="peer h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-colors focus:border-primary-brand-color group-hover:border-primary-brand-color outline-none text-sm pt-2" />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">İsim</span>
                </label>
                {/* LastName */}
                <label className={`${isUser ? 'hidden' : ''}  flex-1 relative group block cursor-pointer`}>
                  <input value={user.lastName} onChange={onInputChange} name="lastName" required type="text" className="peer h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-colors focus:border-primary-brand-color group-hover:border-primary-brand-color outline-none text-sm pt-2" />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Soyisim</span>
                </label>
              </div>
              {/* Email */}
              <label className="flex-1 relative group block cursor-pointer">
                <input value={user.email} onChange={onInputChange} name="email" required type="text" className="peer h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-colors focus:border-primary-brand-color group-hover:border-primary-brand-color outline-none text-sm pt-2" />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Email</span>
              </label>
              {/* Password */}
              <label className="flex-1 relative group block cursor-pointer">
                <input value={user.password} onChange={onInputChange} name="password" required type="password" className="peer h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-colors focus:border-primary-brand-color group-hover:border-primary-brand-color outline-none text-sm pt-2" />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Şifre</span>
              </label>
            </div>
            {/* End Inputs */}
            {
              isUser
                ? <LogInButton onClickAction={onFormSubmit} />
                : <SignInButton onClickAction={onFormSubmit} />
            }
            <hr className="h-[1px] bg-gray-300 my-2" />
            {
              isUser
                ? <SignInButton onClickAction={toggleUserForm} />
                : <LogInButton onClickAction={toggleUserForm} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
