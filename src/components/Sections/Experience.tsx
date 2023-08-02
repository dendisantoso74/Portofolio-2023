import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";

const Experience = () => {
  return (
    <div className='bg-gray-50'>
      <div id='experience' className='container py-24 mx-auto'>
        <div className='flex justify-center mb-4'>
          <div className='bg-gray-200 w-max rounded-xl'>
            <Text className='mx-5'>Experience</Text>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Here is a quick summary of my most recent experiences:
        </Text>

        <div className='grid gap-12 px-16'>
          <div className='flex justify-between w-full p-8 bg-white shadow-xl rounded-xl'>
            <div className=''>
              <img
                src='/images/experience/logo-upwork.png'
                alt='company logo'
              />
            </div>
            <div>
              <Text variant='subtitle' className='font-bold'>
                Sr. Frontend Developer
              </Text>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>
            </div>
            <div>
              <Text>Nov 2021 - Present</Text>
            </div>
          </div>

          <div className='flex justify-between w-full p-8 bg-white shadow-xl rounded-xl'>
            <div className=''>
              <img
                src='/images/experience/logo-upwork.png'
                alt='company logo'
              />
            </div>
            <div>
              <Text variant='subtitle' className='font-bold'>
                Sr. Frontend Developer
              </Text>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>
            </div>
            <div>
              <Text>Nov 2021 - Present</Text>
            </div>
          </div>

          <div className='flex justify-between w-full p-8 bg-white shadow-xl rounded-xl'>
            <div className=''>
              <img
                src='/images/experience/logo-upwork.png'
                alt='company logo'
              />
            </div>
            <div>
              <Text variant='subtitle' className='font-bold'>
                Sr. Frontend Developer
              </Text>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>

              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              </li>
            </div>
            <div>
              <Text>Nov 2021 - Present</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
