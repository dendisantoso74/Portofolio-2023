"use client";

import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import style from "./Section.module.scss";

const Header = () => {
  return (
    <div
      id='header'
      className='sticky top-0 z-30 bg-white border-b shadow-md md:py-3 md:px-60 opacity-95 '
    >
      <div className='justify-between hidden text-center md:flex'>
        <a href='/' className='self-center '>
          {/* <div> */}
          <Image
            width={100}
            height={50}
            src='/images/den-tr.png'
            alt='logo den'
          />
          {/* </div> */}
          {/* <Text variant='headline-2'>HOME</Text> */}
        </a>
        <div className='flex justify-between w-2/5'>
          <a href='#about' className='self-center'>
            About
          </a>
          <a href='#work' className='self-center'>
            Work
          </a>
          <a href='#testimonial' className='self-center pr-12 border-r-2'>
            Testimonial
          </a>
          <div className='flex self-center'>
            <input
              className={style.input}
              type='checkbox'
              id='darkmode-toogle'
              onChange={(e) => console.log("eeee", e.target.value)}
            />
            <label className={style.label} htmlFor='darkmode-toogle'></label>
          </div>

          <button
            // onClick={console.log("download clicked")
            className='px-4 py-2 bg-gray-900 border border-black rounded-xl'
          >
            <a
              href='https://drive.google.com/u/0/uc?id=15uiEHWZIQv0Ufk5sbq-HX_aQtkwm2OMB&export=download'
              className='text-white'
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div className='flex items-center justify-between h-16 mx-6 align-middle md:hidden'>
        <a href='/' className='self-center '>
          {/* <div> */}
          <Image
            width={100}
            height={50}
            src='/images/den-tr.png'
            alt='logo den'
          />
          {/* </div> */}
          {/* <Text variant='headline-2'>HOME</Text> */}
        </a>

        <Image src='images/icon/list.svg' width={32} height={32} alt='menu' />
      </div>
    </div>
  );
};

export default Header;
