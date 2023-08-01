import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='footer' className='px-20 py-4 bg-white'>
      <div className='flex justify-between text-center'>
        <a href='/' className='text-lg font-bold'>
          HOME
        </a>
        <div className='flex justify-between w-2/5'>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='#testimonial'>Testimonial</a>
          <button
            // onClick={console.log("download clicked")}
            className='border border-black rounded-lg bg-slate-400'
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
