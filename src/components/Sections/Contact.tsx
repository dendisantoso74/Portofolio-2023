import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-white'>
      <div id='contact' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-4'>
          <div className='bg-gray-200 w-max rounded-xl'>
            <Text className='mx-5'>Get in touch</Text>
          </div>
        </div>

        <div className='text-center'>
          <Text className='mb-12'>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </Text>
          <div className='flex justify-center gap-4 mb-2'>
            <div className='h-min'>
              <img src='/images/icon/mail.png' alt='email icon' />
            </div>
            <Text variant='headline-2'>dendi.santoso74@gmail.com</Text>
            <div>
              <img
                src='/images/icon/copy.png'
                alt='copy icon'
                className='h-min'
              />
            </div>
          </div>
          <div className='flex justify-center gap-4 mb-12'>
            <div className='h-min'>
              <img src='/images/icon/telp.png' alt='telp icon' />
            </div>
            <Text variant='headline-2'>+62 85159600730</Text>
            <div>
              <img
                src='/images/icon/copy.png'
                alt='copy icon'
                className='h-min'
              />
            </div>
          </div>
          <Text>You may also find me on these platforms!</Text>

          <div className='flex justify-center gap-4 mt-1'>
            <img src='/images/icon/Github.png' alt='github icon' />
            <img src='/images/icon/Twitter.png' alt='twitter icon' />
            <img src='/images/icon/Figma.png' alt='figma icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
