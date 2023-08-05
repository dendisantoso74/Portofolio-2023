import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";
import { EXPERIENCES, TECHNOLOGIES } from "@/lib/data";
import workImage from "/public/images/icon/building.svg";

const Experience = () => {
  return (
    <div className='bg-gray-50'>
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
              <div key={i} className='justify-center block md:flex'>
                <div className='text-left md:-mt-4 md:text-right md:w-1/2 pt-7 pr-14'>
                  <Text variant='subtitle'>
                    {v.startDate} - {v.endDate}
                  </Text>
                </div>

                <div className='relative hidden border border-gray-300 md:block'>
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

                <div className='pl-0 md:w-1/2 md:pl-14 py-7'>
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
                        v.summary.map((summary, j) => (
                          <li key={j}>{summary}</li>
                        ))
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
