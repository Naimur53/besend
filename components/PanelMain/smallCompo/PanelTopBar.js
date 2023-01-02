import Link from 'next/link';
import React, { useState } from 'react';

const PanelTopBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='px-0 md:px-[30px]'>
            <div className='border-b p-[16px] md:pb-[11px] md:pt-[28px] border-[#E7EAEE] flex justify-between'>
                <div>
                    <h4 className='text-normal hidden md:block font-semibold leading-[29px]'>Главная</h4>
                    <div className='md:hidden block'>
                        <Link href='/'>
                            <img className='pointer' src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className='flex md:flex-row flex-row-reverse items-center'>
                    <div className='text-ls font-medium '>
                        <div onClick={() => setOpen(!open)} className='w-[32px] h-[32px] rounded-full text-[#36CFA1] leading-[20px] bg-[#E5F6F1] inline-flex ml-[8px] md:ml-0 mr-0 md:mr-[8px]  justify-center items-center '><span>B</span></div>
                        <span className='text-main-black hidden md:block font-sans'>+7 999 999 99 99</span>
                    </div>
                    <div className="ml-[40px] flex gap-[31px]">
                        <button className='w-[32px] md:w-auto relative'>
                            <img src="/images/bell.png" alt="icon" />
                            <span className="inline-block -top-1 absolute w-[6px] h-[6px] bg-[#DC2626] rounded-full">

                            </span>
                        </button>
                        <button className='md:block hidden'>
                            <img src="/images/out.png" alt="icon " />
                        </button>
                    </div>

                </div>

            </div>
            {/* menu */}
            <div className={`block  md:hidden z-10 absolute transition-all bg-red-300 w-full top-[67px] py-[24px] px-[16px] ${open ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <div className='flex justify-between items-center mb-[56px]'>
                    <div>
                        <h1 className='text-[32px] font-extrabold'>Вадим</h1>
                        <p className='text-main-black text-ls font-sans'>+7 999 999 99 99</p>

                    </div>
                    <img src="/images/right_dark.png" alt="right" />
                </div>
                <div className='pb-[38px] text-ls border-b border-[#E7EAEE]'>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/card.png" className='w-[16px]' alt="icons" />
                            <span>Способы оплаты</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/users.png" className='w-[16px]' alt="icons" />
                            <span>Получатели</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/option/gear.png" className='w-[16px]' alt="icons" />
                            <span>Уведомления</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                    <div className='py-[16px] flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <img src="/images/dark-world.png" className='w-[16px]' alt="icons" />
                            <span>Язык</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                </div>
                <div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Ответы на вопросы</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Оставить отзыв</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                    <div className='py-[16px] text-ls flex justify-between items-center'>
                        <a href='#' className='flex items-center gap-[9px]'>
                            <span>Сообщить о проблеме</span>
                        </a>
                        <img src="/images/right_dark.png" alt="right" />

                    </div>
                </div>
                <div className="mt-[22px]">
                    <button className='panel_button gray flex justify-center !py-[10px] !px-[12px]'>
                        <div className='flex gap-[10px] items-center'>

                            <img src="/images/out.png" className='h-[12px]' alt="" />
                            <span className='text-[14px] leading-[20px]'>Выйти</span>
                        </div>
                    </button>
                </div>

            </div>

            {/* bottom menu */}
            <div className='fixed bottom-0 w-full bg-red-300'>
                d

            </div>
        </div>
    );
};

export default PanelTopBar;