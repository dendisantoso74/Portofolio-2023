import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";

const Skill = () => {
  return (
    <div className='bg-white'>
      <div className='container py-24 mx-auto'>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>Skills</span>
          </div>
        </div>

        <Text className='mb-12 text-center'>
          I have a solid command of the following skills, tools, and
          technologies:
        </Text>

        <div className='grid grid-cols-8 grid-rows-2 gap-y-12 justify-items-center'>
          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>

          <div className='justify-center w-max'>
            <div className='flex justify-center'>
              <img
                src='/images/skill/icon-javscript.png'
                alt='JavaScript icon'
              />
            </div>
            <Text>Javascript</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
