import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";

const NumberCardSection = () => {
    const data = [
        {
            heading: `Войдите в личный кабинет`,
            content: `В первый раз нужно будет пройти проверку личного документа. Почти как в банке, когда открываете счёт.`

        },
        {
            heading: `Введите сумму и страну получения`,
            content: `Сразу посчитаем сумму с учётом комиссии и курса. Никаких неожиданностей.           `

        },
        {
            heading: `Выберите получателя`,
            content: `Нам понадобится только номер телефона. Если получатель ещёне пользуется нашим сервисом, отправим ему SMS-уведомление.`

        },
        {
            heading: `Выберите получателя`,
            content: `Нам понадобится только номер телефона. Если получатель ещёне пользуется нашим сервисом, отправим ему SMS-уведомление.`

        },
        {
            heading: `Выберите получателя`,
            content: `Нам понадобится только номер телефона. Если получатель ещёне пользуется нашим сервисом, отправим ему SMS-уведомление.`

        },
        {
            heading: `Выберите получателя`,
            content: `Нам понадобится только номер телефона. Если получатель ещёне пользуется нашим сервисом, отправим ему SMS-уведомление.`

        },
    ]
    const Card = ({ heading, content, i }) => {

        return <div className='px-[28px] h-[264px] rounded-[32px] bg-white pb-[28px] relative'>
            <div className='flex items-end relative z-10 h-full'>
                <div>
                    <span className='block text-[15px] leading-[18px] mb-[8px] text-[#36CFA1]'>Шаг {i + 1}</span>
                    <h1 className='font-semibold text-sm w-full md:w-2/3'>{heading}</h1>
                    <p className='mt-[8px]'>{content}</p>
                </div>
            </div>
            <div className='text-[300px] top-0 right-0 z-0 absolute gradient_letter font-bold leading-[.9] font-Roboto'>
                {i + 1}
            </div>

        </div>
    }
    return (
        <div id='Как-это-работает' className='pt-[120px]'>
            <div className='text-center mb-[36px] md:mb-[52px]'>
                <h2 className='text-base'>Как это работает</h2>
                <form className='flex justify-center mt-[20px]'>
                    <div class="bg-[#E7EAEE]  rounded-[12px] grid  grid-cols-2 ">
                        <div class="inline-flex   rounded-[12px]">
                            <input className="custom_radio w-full" type="radio" name="room_type2" id="secondRadio" checked hidden />
                            <label for="secondRadio" class="radio_custom_input">Отправить</label>
                        </div>
                        <div class="inline-flex  rounded-[12px]">
                            <input className="custom_radio w-full" type="radio" name="room_type2" id="third-radio" hidden />
                            <label for="third-radio" class="radio_custom_input">Получить</label>
                        </div>
                    </div>
                </form>
            </div>
            {/* cards */}
            <div className='md:block hidden'>
                <Swiper
                    slidesPerView={3.5}
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
                        1024: {
                            slidesPerView: 3.5,
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
                    {
                        data.map((single, i) => <SwiperSlide key={i}><Card  {...single} i={i}></Card></SwiperSlide>)
                    }
                </Swiper>

            </div>
            <div className="grid md:hidden col-span-1 gap-[24px]">
                {
                    data.slice(0, 4).map((single, i) => <Card key={1} {...single} i={i}></Card>)
                }
            </div>
        </div>
    );
};

export default NumberCardSection;