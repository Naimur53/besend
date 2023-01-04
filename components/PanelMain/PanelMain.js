import React from 'react';
import PanelSlide from '../PanelSlide/PanelSlide';
import PanelTopBar from './smallCompo/PanelTopBar';

const PanelMain = () => {
    return (
        <div>
            <PanelTopBar></PanelTopBar>
            <PanelSlide></PanelSlide>
            <div className='px-[16px] md:px-[30px] mt-[62px]  md:mt-[100px] pb-[100px] md:p-0'>
                <div className='flex items-center gap-[20px] '>
                    <div>
                        <p className='whitespace-nowrap text-[14px] md:text-[15px] leading-[18px]'>История <span className='hidden md:inline-block'>переводов</span></p>
                    </div>
                    <hr className='w-full border-[#E7EAEE]' />
                    <div className='flex gap-[4px]   md:gap-[8px] items-center '>
                        <img src="/images/eye-green.svg" alt="icon" />
                        <p className=' w-[153px] md:w-[170px] text-[14px] md:text-ls font-medium text-[#30B68D]'>Показать архивные</p>
                    </div>
                </div>
                {/* items  */}
                <div className='flex flex-col gap-[8px] mt-[22px] pb-0 md:pb-5' >
                    {/* single */}
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray  '>
                                <img className='w-[19px] grayscale' src="/images/downup.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='code_large_text text-[#B8C0CC]'>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>себе</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* single */}
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray'>
                                <img className='w-[19px] grayscale' src="/images/up-green.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='code_large_text text-[#B8C0CC] '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray'>
                                <img className='w-[19px] grayscale' src="/images/down-green.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='code_large_text text-[#B8C0CC] '>  <span className='text-main-black'> 3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>от: <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* single */}
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray'>
                                <img className='w-[19px] grayscale' src="/images/up-green.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* single */}
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray'>
                                <img className='w-[19px] grayscale' src="/images/up-green.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* single */}
                    <div className='bg-[#F7F8F9] p-[16px] rounded-[16px]'>
                        <div className='flex'>
                            <div className='code_slide_icon_wrap gray'>
                                <img className='w-[19px] grayscale' src="/images/up-green.svg" alt="icons" />
                            </div>
                            <div className='w-full pl-[12px]'>
                                <div className='flex justify-between'>
                                    <span className='code_text_b'>вчера</span>

                                </div>
                                <div>
                                    <div className='font-semibold my-[8px] text-[#B8C0CC] text-normal '>10 000 <span className='text-[18px]'>₽</span> <img className='inline-block' src="/images/right-big.svg" alt="" /> <span className='text-main-black'>~ 3 000 ₴</span></div>
                                    <p className='text-xs font-medium text-main-black'>в Украину, <span className='text-[#64748B] font-sans'>+380 999 999 99 99 (Сергей)</span></p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PanelMain;