import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import { Tag } from "../Core/Tag";
import fotoAboutme from "/public/images/mummy-crop.jpg";

const About = () => {
  return (
    <div className='bg-gray-50'>
      <div id='about' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className='bg-gray-200 w-max rounded-xl'>
            <Text className='mx-5'>About me</Text>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-center w-1/2'>
            {/* <div>
            <img src='/images/about.png' alt='profile photo' />
          </div> */}

            {/* Image */}
            <div className='flex justify-center md:order-first md:justify-end'>
              <div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
                <Image
                  src={fotoAboutme}
                  alt='Fullpose of Sagar'
                  className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
                  style={{ objectFit: "cover" }}
                ></Image>
                <div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
              </div>
            </div>
          </div>

          <div className='w-1/2 px-12'>
            <Text variant='headline-3'>
              Curious about me? Here you have it:
            </Text>
            <Text className='text-justify'>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
              <br />
              <br />I began my journey as a web developer in 2015, and since
              then, I've continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
              <br />
              <br />
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
