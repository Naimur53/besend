import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

import { Autoplay, } from "swiper";
import { FreeMode, } from "swiper";

const PanelSlide = () => {
    return (
        <div className='mt-[32px] pl-[30px]'>
            <h1 className='text-sm font-semibold text-main-black'>Активные переводы <span className='text-[#B8C0CC] font-sans '>(3)</span></h1>
            <div className='panel_slide_wrap mt-[20px]  '>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}

                    freeMode={true}
                    modules={[FreeMode,]}
                    className="mySwiper m-0"
                >
                    <SwiperSlide className='min-w-[388px] max-w-[388px]'>


                        {/* single */}
                        <div className=' bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                            <div className='flex'>
                                <div className='min-w-[56px] h-[56px] p-[10px] bg-[#E5F6F1] flex justify-center items-center rounded-full'>
                                    <img className='w-[28px]' src="/images/downup.png" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='text-[15px] leading-[18px] text-[#64748B] uppercase'>вчера</span>
                                        <span className='text-xs px-[8px] py-[4px] bg-[#DEEFFF] text-[#1D82E7] rounded-[8px] font-medium'>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.png" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                        <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B]'>себе</span></p>
                                    </div>

                                </div>
                            </div>
                            {/* button area */}
                            <div className='flex gap-[8px] mt-[12px]'>
                                <button className='panel_button gray'>Не получилось</button>
                                <button className='panel_button'>Перевёл</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='min-w-[388px] max-w-[388px]'>
                        {/* single */}
                        <div className='w-[388px] bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                            <div className='flex'>
                                <div className='min-w-[56px] h-[56px] p-[10px] bg-[#E5F6F1] flex justify-center items-center rounded-full'>
                                    <img className='w-[19px]' src="/images/up-green.png" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='text-[15px] leading-[18px] text-[#64748B] uppercase'>вчера</span>
                                        <span className='text-xs px-[8px] py-[4px] bg-[#F7ECFF] text-[#8F18ED] rounded-[8px] font-medium'>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.png" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                        <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='min-w-[388px] max-w-[388px]'>
                        {/* single */}
                        <div className='w-[388px] bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                            <div className='flex'>
                                <div className='min-w-[56px] h-[56px] p-[10px] bg-[#E5F6F1] flex justify-center items-center rounded-full'>
                                    <img className='w-[19px]' src="/images/down-green.png" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='text-[15px] leading-[18px] text-[#64748B] uppercase'>вчера</span>
                                        <span className='text-xs px-[8px] py-[4px] bg-[#F7ECFF] text-[#8F18ED] rounded-[8px] font-medium'>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>  <span className='text-main-black'>3 000 ₴</span></div>
                                        <p className='text-xs font-medium text-main-black'>от:<span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                    </div>

                                </div>
                            </div>
                            {/* button area */}
                            <div className='flex items-center gap-[8px] mt-[12px]'>
                                <p className='min-w-[205px] text-ls'>У вас новое сообщение</p>
                                <button className='panel_button'>Перевёл</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default PanelSlide;