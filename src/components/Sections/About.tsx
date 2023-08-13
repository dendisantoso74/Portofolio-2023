import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import { Tag } from "../Core/Tag";
import fotoAboutme from "/public/images/mummy-crop.jpg";
import style from "./Section.module.scss";

const About = () => {
  return (
    <div className='overflow-hidden bg-gray-50'>
      <div id='about' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>
              About me
            </span>
          </div>
        </div>

        <div className='justify-between md:flex'>
          {/* Image */}
          <div className='flex justify-center md:w-1/2' data-aos='fade-right'>
            {/* <div className='flex justify-center mb-5 md:order-first md:justify-end md:mb-0'>
              <div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
                <Image
                  src={fotoAboutme}
                  alt='Fullpose of Sagar'
                  className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
                  style={{ objectFit: "cover" }}
                ></Image>
                <div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
              </div>
            </div> */}

            <img src='/images/setup.jpg' alt='setup' />
          </div>

          <div
            className='px-12 my-auto mt-4 md:w-1/2 md:mt-0'
            data-aos='fade-left'
          >
            <Text variant='headline-3' className='mb-6'>
              Wondering about me? Here you go
            </Text>
            <Text className='text-justify'>
              I&apos;am a Frontend Developer with an interest in web development
              and design. Proficient in developing using JavaScript, TypeScript,
              React Js, Next Js, or other frameworks to create appealing and
              responsive user interfaces. Always keeping up with the latest
              trends in the web industry to deliver an excellent user
              experience. Committed to collaborating with design teams,
              optimizing performance, and delivering innovative technical
              solutions.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
