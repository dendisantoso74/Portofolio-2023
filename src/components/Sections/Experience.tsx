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
          {/* {EXPERIENCES.map((v, i) => (
            <div
              key={i}
              className='flex justify-between w-full p-8 bg-white shadow-xl rounded-xl'
            >
              <div className=''>
                <Image
                  src={v.logo}
                  alt={v.logoAlt}
                  className='transition-transform duration-300 md:hover:scale-110'
                />
              </div>
              <div>
                <Text variant='subtitle' className='font-bold'>
                  {v.position}
                </Text>

                {v.summary.map((summary, j) => (
                  <li key={j}>{summary}</li>
                ))}
              </div>
              <div>
                <Text>
                  {v.startDate} - {v.endDate}
                </Text>
              </div>
            </div>
          ))} */}

          <div>
            {EXPERIENCES.map((v, i) => (
              <div key={i} className='flex justify-center'>
                <div className='w-1/2 pt-7 text-right pr-14 '>
                  <Text variant='subtitle'>
                    {v.startDate} - {v.endDate}
                  </Text>
                </div>

                <div className='relative border-2 border-gray-300'>
                  <div className='absolute w-14 h-14 rounded-full -left-7 bg-gray-400'>
                    <div className='h-full flex justify-center'>
                      <Image
                        src={workImage}
                        alt='work'
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>

                <div className='pl-14 py-7 w-1/2'>
                  <div className='p-8 bg-white shadow-xl rounded-xl'>
                    <div className='flex'>
                      <Image src={v.logo} alt={v.logoAlt} />
                      <Text
                        variant='headline-3'
                        className='border-l-2 border-gray-400 ml-3 pl-3'
                      >
                        Metanesia
                      </Text>
                    </div>

                    <div className='mt-8'>
                      <Text variant='subtitle' className='font-bold mb-3'>
                        {v.position}
                      </Text>

                      {v.summary.map((summary, j) => (
                        <li key={j}>{summary}</li>
                      ))}
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
