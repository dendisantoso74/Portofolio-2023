import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";

const Work = () => {
  return (
    <div className='bg-white'>
      <div id='work' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Work</span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Some of the noteworthy projects I have built:
        </Text>

        <div className='grid gap-12 px-6 md:px-16'>
          <div className='bg-white shadow-lg md:flex rounded-xl'>
            <div className='p-12 md:border-r-2 md:w-1/2 bg-gray-50 border-r-gray-100 rounded-t-xl md:rounded-t-none'>
              <div className='flex justify-center'>
                <img src='/images/work/Picture.png' alt='company logo' />
              </div>
            </div>
            <div className='p-12 bg-white md:w-1/2 rounded-b-xl md:rounded-b-none'>
              <Text variant='subtitle' className='font-bold'>
                Developer
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </Text>

              <div className='flex flex-wrap gap-2 my-6'>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>Java</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>React</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>CSS</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>HTML</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>Java java</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>React js</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>CSS</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>HTML</Text>
                </div>
              </div>
              <img src='/images/icon/share.png' alt='share button' />
            </div>
          </div>

          <div className='flex-row-reverse bg-white shadow-lg md:flex rounded-xl'>
            <div className='p-12 md:border-l-2 md:w-1/2 bg-gray-50 border-r-gray-100 rounded-t-xl md:rounded-t-none'>
              <div className='flex justify-center'>
                <img src='/images/work/Picture.png' alt='company logo' />
              </div>
            </div>
            <div className='p-12 bg-white md:w-1/2 rounded-b-xl md:rounded-b-none'>
              <Text variant='subtitle' className='font-bold'>
                Developer
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </Text>

              <div className='flex flex-wrap gap-2 my-6'>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>Java</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>React</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>CSS</Text>
                </div>
                <div className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>HTML</Text>
                </div>
              </div>
              <img src='/images/icon/share.png' alt='share button' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
