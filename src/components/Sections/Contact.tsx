"use client";

import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import style from "./Section.module.scss";

const Contact = () => {
  return (
    <div className='bg-white'>
      <div id='contact' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>
              Get in touch
            </span>
          </div>
        </div>

        <div className='mx-6 text-center md:mx-0'>
          <Text className='mb-12'>
            Feel free to contact me through any of the channels below.
            <br />
            I&apos;m looking forward to connecting with you and ready to assist
            with any questions, collaborations, or projects.
          </Text>
          <div className='flex justify-center gap-4 mb-2'>
            <div className='h-min'>
              <img src='/images/icon/mail.png' alt='email icon' />
            </div>
            <Text variant='headline-2'>dendi.santoso74@gmail.com</Text>
            <button
              onClick={() =>
                navigator.clipboard.writeText("dendi.santoso74@gmail.com")
              }
            >
              <img
                src='/images/icon/copy.png'
                alt='copy icon'
                className='transition-transform duration-300 h-min md:hover:scale-110'
              />
            </button>
          </div>

          {/* <div className='flex justify-center gap-4'>
            <div className='h-min'>
              <img src='/images/icon/telp.png' alt='telp icon' />
            </div>
            <Text variant='headline-2'>+62-85159600730</Text>
            <button
              onClick={() => navigator.clipboard.writeText("+62-85159600730")}
            >
              <img
                src='/images/icon/copy.png'
                alt='copy icon'
                className='h-min'
              />
            </button>
          </div> */}
          <Text className='mt-12'>
            You may also find me on these platforms!
          </Text>

          <div className='flex justify-center gap-5 mt-3'>
            <a target='_blank' href='https://www.linkedin.com/in/dendisan/'>
              <img src='/images/icon/linkedin.svg' alt='linkedin icon' />
            </a>
            <a target='_blank' href='https://github.com/dendisantoso74'>
              <img src='/images/icon/github.svg' alt='github icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com/dendi.san/'>
              <img src='/images/icon/instagram.svg' alt='instagram icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
