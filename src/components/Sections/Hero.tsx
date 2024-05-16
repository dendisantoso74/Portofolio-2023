import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import profile from "/public/images/id-removebg-crop.png";
import gify from "/public/images/giphy.gif";
import style from "./Section.module.scss";
import { IconContext } from "react-icons";

const Hero = () => {
  return (
    <div
      id='hero'
      className='container relative justify-between pt-4 mx-auto bg-fixed md:pt-24 md:flex bg-red'
    >
      <div className='z-10 p-8 md:w-2/3'>
        <div className='flex'>
          <Image
            draggable='false'
            src={gify}
            alt='gif hallo'
            width={65}
            height={60}
            className='hidden rounded-2xl md:block'
          />

          <Image
            draggable='false'
            src={profile}
            alt='gif hallo'
            width={65}
            height={60}
            className='md:hidden rounded-2xl'
          />
          <Text variant='headline-1' className='ml-6'>
            I&apos;m Dendi Santoso
          </Text>
        </div>
        <Text className='mt-8 '>
          Hello there! I want to extend a welcome to you as a frontend web
          developer. I really appreciate your visit and the opportunity to share
          more about myself.
          <br />
          <br />
          This profile is, like a window into my journey, achievements and
          passion, for web development. My aim is to inspire and engage with you
          through stories.
          <br />
          <br />
          Please feel free to explore and connect with me. Lets come together
          and celebrate the world of web development and all the amazing
          opportunities it offers!
        </Text>
        <div className='flex gap-1 mt-12'>
          <div>
            <img src='/images/icon/map.svg' alt='map icon' />
          </div>
          <Text>Jakarta, Indonesia</Text>
        </div>
        <div className='flex gap-1 mt-2'>
          {/* <div className='w-3 h-3 mt-2 ml-2 bg-green-500 border-4 border-green-500 rounded-full '></div> */}
          <div className='flex items-center justify-center w-6 h-6'>
            <span className='relative flex w-3 h-3'>
              <span className='absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400'></span>
              <span className='relative inline-flex w-3 h-3 rounded-full bg-emerald-500'></span>
            </span>
          </div>
          <Text>Available for new projects</Text>
        </div>
        <div className='flex justify-center gap-8 mt-12 md:justify-start'>
          <a target='_blank' href='https://www.linkedin.com/in/dendisan/'>
            <img src='/images/icon/linkedin.svg' alt='linkedin icon' />
          </a>
          <a target='_blank' href='https://github.com/dendisantoso74'>
            <img src='/images/icon/github.svg' alt='github icon' />
          </a>
          <a target='_blank' href='https://www.instagram.com/dendi.san/'>
            <img src='/images/icon/instagram.svg' alt='instagram icon' />
          </a>
        </div>
      </div>
      <div className='z-10 flex justify-center w-1/3'>
        {/* Image */}
        {/* <div className='flex items-center justify-center md:order-last md:flex-grow md:justify-end'>
          <div className='relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]'>
            <Image
              src={profile}
              alt='hero'
              className='absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]'
              style={{ objectFit: "cover" }}
            ></Image>
            <div className='absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]'></div>
          </div>
        </div> */}

        <Image
          src={profile}
          alt='hero'
          // className='absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]'
          // style={{ objectFit: "cover" }}
          className='items-end hidden h-max md:block'
        />

        {/* <div>
          <img src='/images/pic.png' alt='profile photo' />
        </div> */}
      </div>
      {/* <div className='absolute top-0 left-0 right-0 object-cover h-full md:w-full md:object-fill'> */}
      {/* <img
        src='/images/gelombang.jpg'
        alt='background'
        draggable='false'
        className='absolute bottom-0 left-0 right-0 z-0 scale-100 border-4'
      /> */}
    </div>
  );
};

export default Hero;
