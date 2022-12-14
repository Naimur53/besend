import Image from 'next/future/image';
import React from 'react';
import SelectLan from './smallCompo/SelectLan';

const Footer = () => {
    return (
        <div className='py-[32px] md:pb-[61px] md:pt-[54px] bg-main-black mt-[162px] md:mt-[177px]'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-start justify-between'>
                    <div className='block md:hidden'>
                        <p className='font-medium text-xs text-white mb-[44px] '>*12 минут — среднее время совершения перевода, основанное на результатах исследования 20 человек</p>
                    </div>
                    <div>
                        <div className='flex md:hidden gap-[20px] mb-[46px] '>
                            <a href="#" className='inline-block'>
                                <img quality={100} className='max-w-[36px]' layout='raw' src='/images/redit.svg' width={100} height={100} alt='icons'></img>
                            </a>
                            <a href="#" className='inline-block'>

                                <img quality={100} className='max-w-[36px]' layout='raw' src='/images/face.svg' width={100} height={100} alt='icons'></img>
                            </a>
                            <div className='flex gap-[6px] items-center'>
                                <a href="#" className='inline-block'>
                                    <img quality={100} className='max-w-[36px]' layout='raw' src='/images/extrastar.svg' width={100} height={100} alt='icons'></img>
                                </a>
                                <a href="#" className='inline-block'>
                                    <img quality={100} className='max-w-[102px]' layout='raw' src='/images/trustpilot.svg' width={400} height={80} alt='icons'></img>
                                </a>
                            </div>
                        </div>
                        <div className='md:flex hidden gap-[20px] '>
                            <a href="#" className='inline-block'>
                                <img quality={100} className='max-w-[36px]' layout='raw' src='/images/gray-redit.svg' width={80} height={80} alt='icons'></img>
                            </a>
                            <a href="#" className='inline-block'>

                                <img quality={100} className='max-w-[36px]' layout='raw' src='/images/gray-face.svg' width={80} height={80} alt='icons'></img>
                            </a>
                            <div className='flex gap-[6px] items-center'>
                                <a href="#" className='inline-block'>
                                    <img quality={100} className='max-w-[36px]' layout='raw' src='/images/gray-extrastar.svg' width={80} height={80} alt='icons'></img>
                                </a>
                                <a href="#" className='inline-block'>
                                    <img quality={100} className='max-w-[102px]' layout='raw' src='/images/trustpilot.png' width={200} height={80} alt='icons'></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white mb-[47px] md:mb-0'>
                        <SelectLan></SelectLan>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <p className='font-medium text-xs text-white mt-[34px] mb-[44px] '>*12 минут — среднее время совершения перевода, основанное на результатах исследования 20 человек</p>
                </div>
                <hr className='w-full h-[0px] border-t border-[#64748B]' />
                <div className='mt-[41px] md:flex justify-between text-white text-ls'>
                    <div className='flex gap-[12px] md:gap-[28px] md:flex-row flex-col'>
                        <span className=' '>Пользовательское соглашение</span>
                        <span >Политика обработки персональных данных</span>
                    </div>
                    <div className='mt-[34px] md:mt-0'>
                        <p>© 2022 Espectro Solutions SIA, Riga, Latvia</p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;