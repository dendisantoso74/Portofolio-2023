"use client";

import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";
import { EXPERIENCES, PROJECTS } from "@/lib/data";
import { Carousel } from "react-responsive-carousel";
import imageDummy from "public/images/work/amgv.png";
import imageDummy2 from "public/images/work/Picture.png";

const Work = () => {
  const settings = {
    // className: "center",
    autoPlay: false,
    centerMode: false,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    interval: 2000,
    stopOnHover: false,
    // dynamicHeight: true,
  };

  return (
    <div className='overflow-hidden bg-white dark:bg-[#121212]'>
      <div id='work' className='container pt-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Work</span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Several remarkable projects that I have developed:
        </Text>

        <div className='grid grid-cols-1 grid-rows-none gap-6 p-6 md:grid md:grid-cols-3'>
          {/* card work */}
          {PROJECTS.map((v, i) => (
            <div
              key={i}
              className='bg-white border shadow-md rounded-xl md:mb-0 dark:bg-[#222831b8] dark:border-none'
              data-aos='fade-left'
              data-aos-delay={300 * i}
              // data-aos-duration='800'
            >
              <div className=''>
                <div className='p-10 bg-gray-100 rounded-t-xl dark:bg-gray-500'>
                  <div className='flex justify-center'>
                    <Carousel {...settings}>
                      {v.previewImage.map((img, j) => (
                        <Image
                          key={j}
                          src={img}
                          alt='desain priview'
                          className='rounded-xl'
                        />
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className='p-8'>
                  <Text variant='headline-3' className=''>
                    {v.name}
                  </Text>

                  <Text className='mt-3'>{v.description}</Text>
                  <div className='flex flex-wrap gap-2 my-6'>
                    {v.technologies.map((skill, k) => (
                      <div key={k} className='bg-gray-200 w-max rounded-xl '>
                        <Text className='mx-5'>{skill}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
