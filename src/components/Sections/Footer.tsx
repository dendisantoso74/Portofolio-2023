import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer' className='px-20 py-6 bg-gray-50'>
      <div className='flex justify-center text-center'>
        <div className='mt-1 mr-2 h-min'>
          <img src='/images/icon/c.png' alt='copyright' />
        </div>
        <Text>2023 Dendi | All rights reserved.</Text>
      </div>
    </div>
  );
};

export default Footer;
