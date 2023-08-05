import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";

const Testimonial = () => {
  return (
    <div className='bg-gray-50'>
      <div id='testimonial' className='container py-24 mx-auto'>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Review</span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Some of the noteworthy projects I have built:
        </Text>

        <div className='gap-12 m-6 md:m-0 md:flex'>
          <div className='mb-6 bg-white shadow-md rounded-xl md:mb-0'>
            <div className='p-12'>
              <div className='flex justify-center'>
                <img src='/images/testimoni/avatar.png' alt='share button' />
              </div>

              <Text className='my-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </Text>
              <div className='text-center'>
                <Text variant='subtitle'>Jhon doe</Text>
                <Text>Foubder xxxx</Text>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-xl'>
            <div className='p-12'>
              <div className='flex justify-center'>
                <img src='/images/testimoni/avatar.png' alt='share button' />
              </div>

              <Text className='my-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </Text>
              <div className='text-center'>
                <Text variant='subtitle'>Jhon doe</Text>
                <Text>Foubder xxxx</Text>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-xl'>
            <div className='p-12'>
              <div className='flex justify-center'>
                <img src='/images/testimoni/avatar.png' alt='share button' />
              </div>

              <Text className='my-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </Text>
              <div className='text-center'>
                <Text variant='subtitle'>Jhon doe</Text>
                <Text>Foubder xxxx</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
