import "../../app/globals.css";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id='footer'
      className='py-6 text-center md:px-20 bg-gray-50 dark:bg-[#222831]'
    >
      <Text>© Dendi 2023 | All rights reserved.</Text>
    </div>
  );
};

export default Footer;
