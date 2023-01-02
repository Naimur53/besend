import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const PanelTopBar = ({ activePath }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='px-0 md:px-[30px]'>
            <div className='border-b p-[16px] md:pb-[11px] md:pt-[28px] border-[#E7EAEE] flex justify-between'>
                <div>
                    <h4 className='text-ls 2xl:text-normal hidden md:block font-semibold leading-[29px]'>Главная</h4>
                    <div className='md:hidden block'>
                        <Link href='/'>
                            <img className='pointer' src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className='flex md:flex-row flex-row-reverse items-center'>
                    <div className='text-[14px] 2xl:text-ls font-medium flex items-center '>
                        <div className='w-[32px] h-[32px] rounded-full text-[#36CFA1] leading-[20px] bg-[#E5F6F1] inline-flex ml-[8px] md:ml-0 mr-0 md:mr-[8px]  justify-center items-center '><span>B</span></div>
                        <a href='tel:+7 999 999 99 99' className='text-main-black hidden md:block font-sans'>+7 999 999 99 99</a>
                    </div>
                    <div className="ml-[40px] flex gap-[31px]">
                        <button className='w-[32px] md:w-auto relative'>
                            <img src="/images/bell.png" alt="icon" />
                            <span className="inline-block md:hidden -top-1 absolute w-[6px] h-[6px] bg-[#DC2626] rounded-full">

                            </span>
                        </button>
                        <button className='md:block hidden'>
                            <img src="/images/out.png" alt="icon " />
                        </button>
                    </div>

                </div>

            </div>
            {/* menu */}


            {/* bottom menu */}
            <div className='grid grid-cols-3 md:hidden fixed bottom-0 w-full bg-[#F7F8F9] h-[80px] z-[5]'>
                <Link href='/panel'>
                    <div href='#' className={`bottom_nav_item ${'menu' !== activePath ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                        <h6 className='text'>Главная</h6>

                    </div>
                </Link>
                <Link href='/'>

                    <div href='#' className='bottom_nav_item relative  text-white'>
                        <div className='relative z-20 bottom_nav_item'>
                            <img src="/images/updownwhite.png" className='w-[22px]' alt="icon" />
                            <h6 className='text-white'>Главная</h6>
                        </div>
                        <div className='absolute bg-[#36CFA1] w-full h-[88px] rounded-t-[16px]'>


                        </div>

                    </div>
                </Link>
                <Link href='/menu'>
                    <div className={`bottom_nav_item ${'menu' === activePath ? 'active' : ''}`}>
                        <div className='w-[23px] h-[23px] rounded-full flex justify-center items-end border-2 border-[#B8C0CC]'>

                            <FontAwesomeIcon icon={faUser} className='icon ' />
                        </div>
                        <h6 className='text'>Главная</h6>

                    </div>
                </Link>

            </div>
        </div>
    );
};

export default PanelTopBar;