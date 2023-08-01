import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import { Tag } from "../Core/Tag";

const About = () => {
  return (
    <div className='px-20 py-24 bg-gray-50 '>
      <div className='flex justify-center mb-12'>
        <div className='bg-gray-200 w-max rounded-xl'>
          <Text className='mx-5'>About me</Text>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex justify-center w-1/2'>
          <div>
            <img src='/images/about.png' alt='profile photo' />
          </div>
        </div>

        <div className='w-1/2 px-12'>
          <Text variant='headline-3'>Curious about me? Here you have it:</Text>
          <Text className='text-justify'>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br />
            <br />I began my journey as a web developer in 2015, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
            <br />
            <br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default About;
