"use client";

import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";
import { EXPERIENCES, PROJECTS } from "@/lib/data";
import { Carousel } from "react-responsive-carousel";

const Work = () => {
  const settings = {
    // className: "center",
    autoPlay: true,
    centerMode: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    interval: 2000,
    stopOnHover: false,
  };

  return (
    <div className='bg-white'>
      <div id='work' className='container pt-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Work</span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Several remarkable projects that I have developed:
        </Text>
      </div>

      {/* experimental card */}
      {PROJECTS.map((v, i) => (
        <div key={i}>
          <div className='' style={{ width: "screen" }}>
            <Carousel {...settings}>
              <img src='/images/crop/1.png' alt='ss' />
              <img src='/images/crop/2.png' alt='ss' />
              <img src='/images/crop/3.png' alt='ss' />
              <img src='/images/crop/4.png' alt='ss' />
              <img src='/images/crop/5.png' alt='ss' />
              <img src='/images/crop/6.png' alt='ss' />
            </Carousel>
          </div>

          <div className='container px-4 py-10 mx-auto md:px-28'>
            <Text variant='headline-2' className='mb-2 font-bold'>
              {v.name}
            </Text>
            <Text>{v.description}</Text>

            <div className='flex flex-wrap gap-2 my-6'>
              {v.technologies.map((v, j) => (
                <div key={j} className='bg-gray-200 w-max rounded-xl'>
                  <Text className='mx-5'>{v}</Text>
                </div>
              ))}
            </div>
            {/* <img src='/images/icon/share.png' alt='share button' /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
