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
        <div className='mt-[32px] pl-[16px] md:pl-[30px]'>
            <h1 className='text-sm font-semibold text-main-black'>Активные переводы <span className='text-[#B8C0CC] font-sans '>(3)</span></h1>
            <div className='panel_slide_wrap mt-[20px]  '>
                <Swiper
                    spaceBetween={typeof window !== 'undefined' ? window.innerWidth > 500 ? 20 : 8 : 8}
                    slidesPerView={'auto'}
                    freeMode={true}
                    modules={[FreeMode,]}
                    className="mySwiper m-0"
                >
                    <SwiperSlide className='slide_wrap_main'>


                        {/* single */}
                        <div className=' code_slide_single_container'>
                            <div className='flex'>
                                <div className='code_slide_icon_wrap'>
                                    <img className='w-[28px]' src="/images/downup.svg" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='code_text_b'>вчера</span>
                                        <span className='code_color_box bg-[#DEEFFF] text-[#1D82E7] '>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className=' text-[#B8C0CC]  code_large_text'>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                        <p className='code_down_small_text text-main-black'>в Украину, <span className='text-[#64748B]'>себе</span></p>
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
                    <SwiperSlide className='slide_wrap_main'>
                        {/* single */}
                        <div className='code_slide_single_container'>
                            <div className='flex'>
                                <div className='code_slide_icon_wrap'>
                                    <img className='w-[19px]' src="/images/up-green.svg" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='code_text_b'>вчера</span>
                                        <span className='code_color_box bg-[#F7ECFF] text-[#8F18ED] '>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className=' text-[#B8C0CC] code_large_text '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                        <p className='code_down_small_text text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide_wrap_main'>
                        {/* single */}
                        <div className='code_slide_single_container'>
                            <div className='flex'>
                                <div className='code_slide_icon_wrap'>
                                    <img className='w-[19px]' src="/images/down-green.svg" alt="icons" />
                                </div>
                                <div className='w-full pl-[12px]'>
                                    <div className='flex justify-between'>
                                        <span className='code_text_b'>вчера</span>
                                        <span className=' bg-[#F7ECFF] text-[#8F18ED] code_color_box'>Переведите деньги</span>
                                    </div>
                                    <div>
                                        <div className=' text-[#B8C0CC] code_large_text '>  <span className='text-main-black'>3 000 ₴</span></div>
                                        <p className='code_down_small_text text-main-black'>от:<span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                    </div>

                                </div>
                            </div>
                            {/* button area */}
                            <div className='flex items-center gap-[8px] mt-[12px]'>
                                <p className='min-w-[140px] md:min-w-[205px] text-xs md:text-ls'>У вас новое сообщение</p>
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