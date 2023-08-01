import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='flex justify-between px-20 py-24 bg-white'>
      <div className='w-2/3 p-8 '>
        <Text variant='headline-1'>Hi, xxxx 👋</Text>
        <Text className='text-justify'>
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </Text>
        <div className='flex gap-1 mt-12'>
          <img src='/images/icon/Map.png' alt='map icon' />
          <Text>Jakarta, Indonesia</Text>
        </div>
        <div className='flex gap-1 mt-2'>
          <div className='w-3 h-3 mt-2 ml-2 bg-green-500 border-4 border-green-500 rounded-full '></div>
          <Text>Available for new projects</Text>
        </div>
        <div className='flex gap-4 mt-12'>
          <img src='/images/icon/Github.png' alt='github icon' />
          <img src='/images/icon/Twitter.png' alt='twitter icon' />
          <img src='/images/icon/Figma.png' alt='figma icon' />
        </div>
      </div>
      <div className='flex justify-center w-1/3'>
        <div>
          <img src='/images/pic.png' alt='profile photo' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
