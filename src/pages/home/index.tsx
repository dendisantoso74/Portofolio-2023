import "../../app/globals.css";
import Image from "next/image";
import style from "./home.module.scss";
import cn from "classnames";

const Home = () => {
  return (
    <div className={cn("flex", style.home)}>
      <div className='w-1/2'>
        <h1>Hi, I’m xxxx 👋</h1>
        <p className='text-justify'>
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
      </div>
      <div className='w-1/2'>
        <Image
          src='/images/pic.png'
          alt='profile photo'
          width={100}
          height={100}
        />
      </div>

      <div className='border-2 border-yellow-700'>xxx</div>
    </div>
  );
};

export default Home;
