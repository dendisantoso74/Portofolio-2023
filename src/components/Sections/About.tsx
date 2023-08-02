import "../../app/globals.css";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Core/Text";
import { FaBeer, FaGithub } from "react-icons/fa";
import { Tag } from "../Core/Tag";
import fotoAboutme from "/public/images/mummy-crop.jpg";
import style from "./Section.module.scss";

const About = () => {
  return (
    <div className='bg-gray-50'>
      <div id='about' className='container py-24 mx-auto '>
        <div className='flex justify-center mb-12'>
          <div className={style.div__section}>
            <span className='mx-5 text-lg font-medium text-white'>
              About me
            </span>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              ducimus, tenetur dignissimos illum quae velit non dolor, nam
              veniam a recusandae exercitationem accusantium blanditiis nobis
              at, quos quia laboriosam omnis nostrum. Saepe, aliquid sunt iste
              numquam repellendus ut amet aperiam est esse rerum vero quasi,
              sapiente cupiditate temporibus iusto hic magni harum perferendis,
              deleniti voluptatibus officia maio
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              magni, quae officia nam eveniet in ab. Praesentium sequi aliquid
              modi obcaecati! Blanditiis necessitatibus vero et maxime magnam
              commodi consequatur porro enim! Excepturi eum molestiae impedit
              adipisci quae similique beatae porro deserunt magnam sunt rem ea
              odio optio, explicabo eveniet illo sed vitae ex tenetur veniam
              sapiente obcaecati nihil sint! Repellendus dolorem impedit, quis
              culpa illo velit, accusantium voluptatem odit autem aliquam animi,
              reprehenderit optio in. Quod deserunt suscipit facilis itaque
              delectus iusto eos in eveniet tempora quam, consequuntur velit
              veritatis eaque amet, sapiente et aut expedita similique ad illum.
              Exercitationem.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
