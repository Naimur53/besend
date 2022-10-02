import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";

const BlackCardWrap = () => {
    const Card1 = () => {
        return (
            <div className='p-[28px] rounded-[32px] bg-main-black text-white h-full bg-no-repeat bg-right-bottom bg-[length:250px_250px] md:bg-contain' style={{ backgroundImage: 'url(/images/pic1.png)' }}>
                <div>
                    <h2 className='text-normal xl:text-base mb-[12px]'>Это быстро и просто</h2>
                    <p className='text-ls text-[#E7EAEE] mb-[8px]'>
                        Не нужно никуда ехать — даже чтобы получить деньги. Понадобится только интернет.
                    </p>
                    <p className='text-ls text-[#E7EAEE] mb-[8px]'>
                        Кстати, перевод занимает в среднем 12 минут.
                    </p>
                </div>
            </div>
        )
    }
    const Card2 = () => {
        return (
            <div className='p-[28px] h-full rounded-[32px] bg-main-black text-white bg-no-repeat  bg-right-bottom bg-contain' style={{ backgroundImage: 'url(/images/pic2.png)' }}>
                <div>
                    <h2 className='text-normal xl:text-base mb-[12px]'>А ещё удобно</h2>
                    <p className='text-ls text-[#E7EAEE] mb-[8px] w-10/12	'>
                        Мы предлагаем разные методы отправки и получения —от стандартных карт до электронных кошельков.
                    </p>
                    <p className='text-ls text-[#E7EAEE] mb-[8px] w-10/12	'>
                        Вне зависимости от метода, перевод будет произведенпо рыночному курсу.
                    </p>
                </div>
            </div>
        )
    }
    const Card3 = () => {
        return (
            <div className='p-[28px] h-full rounded-[32px] bg-main-black text-white bg-no-repeat bg-right-bottom bg-contain  md:bg-[length:200px_200px] xl:bg-[length:300px_300px]' style={{ backgroundImage: 'url(/images/pic3.png)' }}>
                <div>
                    <h2 className='text-normal xl:text-base mb-[12px] md:w-10/12'>Можно перевестис рублевой карты</h2>
                    <p className='text-ls text-[#E7EAEE] mb-[8px]'>
                        Да, даже с карт Visa и Mastercard <br /> российских банков
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div className='pt-[120px] md:pt-[160px]'>
            <div className='hidden md:grid grid-cols-12  gap-[24px]'>
                <div className='h-[758px] col-span-5'>
                    <Card1></Card1>
                </div>
                <div className='grid grid-rows-2 col-span-7 gap-[24px]'>
                    <Card2></Card2>
                    <Card3></Card3>

                </div>

            </div>
            <div className='block md:hidden'>
                <Swiper
                    slidesPerView={1.3}
                    spaceBetween={10}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,]}
                >
                    <SwiperSlide style={{ height: '600px' }}><Card1></Card1></SwiperSlide>
                    <SwiperSlide style={{ height: '600px' }}><Card2></Card2></SwiperSlide>
                    <SwiperSlide style={{ height: '600px' }}><Card3></Card3></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BlackCardWrap;