"use client";

import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";
import { EXPERIENCES, TECHNOLOGIES } from "@/lib/data";
import workImage from "/public/images/icon/building.svg";
import { useEffect } from "react";

const Experience = () => {
  return (
    <div className='overflow-hidden bg-gray-50'>
      <div id='experience' className='container py-24 mx-auto'>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>
              Experience
            </span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          Here is a quick summary of my most recent experiences:
        </Text>

        <div className='grid gap-12 px-16'>
          <div>
            {EXPERIENCES.map((v, i) => (
              <div
                key={i}
                className={cn(
                  i % 2 === 0
                    ? "justify-center block md:flex"
                    : "justify-center block md:flex flex-row-reverse"
                )}
              >
                {/* date experience */}
                <div
                  className={cn(
                    i % 2 === 0
                      ? "text-left md:-mt-4 md:text-right md:w-1/2 pt-7 pr-14"
                      : "text-left md:-mt-4 md:text-left md:w-1/2 pt-7 pl-14"
                  )}
                  data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={150 * i}
                >
                  <Text variant='subtitle'>
                    {v.startDate} - {v.endDate}
                  </Text>
                </div>

                {/* icon center */}
                <div
                  className='relative hidden border border-gray-300 md:block'
                  data-aos='zoom-out'
                  // data-aos-delay={100 * i}
                  data-aos-duration='800'
                >
                  <div className='absolute bg-gray-400 rounded-full w-14 h-14 -left-7 -top-1'>
                    <div className='flex justify-center h-full'>
                      <Image
                        src={workImage}
                        alt='work'
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>

                {/* detail Experience */}
                <div
                  className={cn(
                    i % 2 === 0
                      ? "pl-0 md:w-1/2 md:pl-14 py-7"
                      : "pr-0 md:w-1/2 md:pr-14 py-7"
                  )}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={150 * i}
                >
                  <div className='p-8 bg-white shadow-xl rounded-xl'>
                    <div className='items-center md:flex'>
                      <Image
                        className='max-w-[10rem]'
                        src={v.logo}
                        alt={v.logoAlt}
                      />
                      <Text
                        variant='headline-3'
                        className='hidden mt-3 md:mt-0 md:pl-3 md:ml-3 md:border-gray-400 md:border-l-2 md:block'
                      >
                        {v.logoAlt}
                      </Text>
                    </div>

                    <div className='mt-8'>
                      <Text variant='subtitle' className='mb-3 font-bold'>
                        {v.position}
                      </Text>

                      {v.summary.length > 1 ? (
                        <ul className='ml-4 list-disc'>
                          {v.summary.map((summary, j) => (
                            <li key={j}>{summary}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{v.summary[0]}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
