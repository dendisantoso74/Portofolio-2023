import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";
import { TECHNOLOGIES } from "@/lib/data";

const Skill = () => {
  return (
    <div className='bg-white dark:bg-[#121212]'>
      <div id='skill' className='container py-24 mx-auto'>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Skills</span>
          </div>
        </div>

        <Text className='mb-16 text-center px-7 md:px-0'>
          I have a solid command of the following skills, tools, and
          technologies:
        </Text>

        <div className='grid grid-cols-3 grid-rows-none md:grid-cols-5 gap-y-12 justify-items-center'>
          {TECHNOLOGIES.map((v, index) => (
            <div
              key={index}
              className='justify-center w-max'
              data-aos='zoom-in'
              data-aos-delay={150 * index}
            >
              <a href={v.url} target='_blank' className='flex justify-center'>
                <Image
                  src={v.logo}
                  alt={v.label}
                  className='transition-transform duration-300 md:hover:scale-110'
                />
              </a>
              <Text className='mt-2 text-center'>{v.label}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
