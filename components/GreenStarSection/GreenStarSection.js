import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";
const GreenStarSection = () => {

    const Card1 = () => {
        return <div className='bg-white h-[220px] flex flex-col items-center justify-center p-[20px]'>
            <div >
                <h2 className='mb-[8px] text-black text-[18px] leading-[26px] font-medium'>Excellent</h2>
            </div>
            <div className="flex gap-[8px]">
                {
                    [1, 2, 3, 4, 5].map(single => <Image quality={100} key={single} src='/images/fill_star.svg' width={40} height={40} alt='star'></Image>)
                }
            </div>
            <div className='my-[8px]'>
                <p className='text-[14px] text-black leading-[22px] font-light'>
                    Based on <span className='font-bold underline'>456 reviews</span>
                </p>

            </div>
            <div className='flex items-center gap-[4px]'>
                <Image quality={100} src='/images/largeStar.svg' width={25} height={24} alt='star'></Image>
                <h2 className='font-bold text-black text-ls'>Trustpilot</h2>
            </div>
        </div>
    }

    const Card2 = () => {
        return <div className='bg-white h-[220px] flex flex-col  justify-center   p-[20px]'>
            <div className='flex w-full justify-between'>
                <div>
                    <div className="flex gap-[2px]">
                        {
                            [1, 2, 3, 4, 5].map(single => <Image quality={100} key={single} src='/images/fill_star.svg' width={20} height={20} alt='star'></Image>)
                        }
                    </div>
                </div>
                <p className='text-[12px] leading-[26px] font-light text-black'>2 days ago</p>
            </div>
            <div >
                <h2 className='mb-[8px] text-black text-[18px] leading-[26px] font-medium mt-[8px]'>Best on the market</h2>
                <p className='text-[14px] mb-[8px] leading-[22px] text-black font-light'>I love this product because the support is great. Please ...</p>
            </div>
            <hr className='bg-[#D9D9D9] w-[60px] h-[1px] mb-[8px]' />
            <p className='text-black font-bold text-[14px] leading-[22px]'>Worldtraveler</p>

        </div>
    }
    return (
        <div id='Отзывы' className='pt-[180px] font-Roboto'>
            <div className='text-center mb-[36px] md:mb-[52px] flex flex-col justify-center items-center'>
                <h4 className='text-[15px] leading-[18px] text-[#64748B] mb-[12px]'>Отзывы</h4>
                <h1 className='text-normal font-medium md:text-base  w-1/2 '>Нам доверяют 123 человека</h1>

            </div>
            <Swiper
                slidesPerView={4.3}
                spaceBetween={20}
                breakpoints={{
                    140: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.3,
                        spaceBetween: 20,
                    },
                    1330: {
                        slidesPerView: 4.3,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card1></Card1>
                </SwiperSlide>
                {
                    [1, 2, 3, 4, 5].map((single, i) => <SwiperSlide key={i}>  <Card2></Card2> </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default GreenStarSection;