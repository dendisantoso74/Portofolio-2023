import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      id='header'
      className='sticky top-0 z-30 px-20 py-3 bg-white border-b shadow-md opacity-95'
    >
      <div className='flex justify-between text-center'>
        <a href='/' className='self-center '>
          <Text variant='headline-2'>HOME</Text>
        </a>
        <div className='flex justify-between w-2/5'>
          <a href='#about' className='self-center'>
            About
          </a>
          <a href='#work' className='self-center'>
            Work
          </a>
          <a href='#testimonial' className='self-center'>
            Testimonial
          </a>
          <button
            // onClick={console.log("download clicked")}
            className='px-4 py-2 bg-gray-900 border border-black rounded-xl'
          >
            <span className='text-white'>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
